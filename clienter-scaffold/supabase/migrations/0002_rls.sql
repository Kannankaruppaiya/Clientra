-- Row Level Security — the layer that actually protects data from the public
-- anon key. Enable on every table and scope rows to the user's organization.

-- Helper: orgs the current user belongs to.
create or replace function public.my_org_ids()
returns setof uuid language sql stable security definer set search_path = public as $$
  select organization_id from organization_members where user_id = auth.uid()
$$;

-- profiles: a user sees/edits only their own row.
alter table profiles enable row level security;
create policy profiles_self on profiles
  for all using (id = auth.uid()) with check (id = auth.uid());

-- organization_members: a user sees memberships of orgs they belong to.
alter table organization_members enable row level security;
create policy org_members_read on organization_members
  for select using (organization_id in (select my_org_ids()));

-- organizations: a user sees orgs they belong to.
alter table organizations enable row level security;
create policy organizations_member on organizations
  for select using (id in (select my_org_ids()));

-- Tables that carry organization_id directly: scope to the user's org.
do $$
declare t text;
begin
  foreach t in array array['clients','leads','projects','tasks','meetings',
    'messages','documents','expenses','subscriptions','reminders']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format($p$create policy %1$s_org on %1$I
      for all using (organization_id in (select my_org_ids()))
      with check (organization_id in (select my_org_ids()));$p$, t);
  end loop;
end $$;

-- project_payments has no organization_id; scope through its parent project
-- (matches the observed query: project_payments -> projects!inner(organization_id)).
alter table project_payments enable row level security;
create policy project_payments_via_project on project_payments
  for all
  using (project_id in (
    select id from projects where organization_id in (select my_org_ids())
  ))
  with check (project_id in (
    select id from projects where organization_id in (select my_org_ids())
  ));
