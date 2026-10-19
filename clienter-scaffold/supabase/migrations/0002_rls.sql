-- Row Level Security — the layer that actually protects the data from the
-- public anon key. Enable on every table and scope rows to the user's org.

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

-- Org-scoped tables: readable/writable only within the user's org.
do $$
declare t text;
begin
  foreach t in array array['clients','leads','projects','tasks','meetings',
    'messages','documents','payments','subscriptions','reminders']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format($p$create policy %1$s_org on %1$I
      for all using (organization_id in (select my_org_ids()))
      with check (organization_id in (select my_org_ids()));$p$, t);
  end loop;
end $$;
