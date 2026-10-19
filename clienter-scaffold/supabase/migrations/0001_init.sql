-- Core schema for Clienter.
-- Column sets reflect real relationships observed in the live app's API traffic
-- (Supabase REST select shapes captured from the dashboard).

create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  team_member_limit_override int,          -- observed
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'member',       -- owner | admin | member | teammate
  created_at timestamptz default now(),
  unique (organization_id, user_id)
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  name text not null,                         -- observed
  phone text,                                 -- observed
  email text,
  created_at timestamptz default now()        -- observed
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  name text,
  stage text default 'new',
  source text,                                -- referral | website | cold call | instagram (from pipeline UI)
  created_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  client_id uuid references clients(id) on delete set null,
  name text not null,
  budget numeric,                             -- observed
  is_retainer boolean default false,
  created_at timestamptz default now()
);

-- Payments against a project (observed: project_payments.projects!inner(organization_id)).
create table if not exists project_payments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  amount numeric,                             -- observed
  payment_date date,                          -- observed
  razorpay_payment_id text,
  created_at timestamptz default now()        -- observed
);

create table if not exists expenses (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  amount numeric,                             -- observed
  date date,                                  -- observed
  note text,
  created_at timestamptz default now()        -- observed
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade,
  title text not null,
  status text default 'todo',
  assigned_to uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists meetings (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  client_id uuid references clients(id) on delete set null,  -- meetings->client (observed join)
  title text, starts_at timestamptz, created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  sender_id uuid references auth.users(id),
  body text, created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  kind text default 'document',               -- document | quotation | invoice
  storage_key text,                           -- Cloudflare R2 object key
  created_at timestamptz default now()
);

-- reminders -> meeting -> client (observed: *,meeting:meetings(*,client:clients(*)))
create table if not exists reminders (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  user_id uuid references auth.users(id),
  meeting_id uuid references meetings(id) on delete cascade,
  remind_at timestamptz, body text,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  plan text,                                  -- observed
  status text default 'active',               -- observed
  expires_at timestamptz,                     -- observed
  autopay_status text,                        -- observed
  cancel_at_period_end boolean default false, -- observed
  razorpay_subscription_id text,              -- observed
  paypal_subscription_id text,                -- observed
  created_at timestamptz default now()
);
