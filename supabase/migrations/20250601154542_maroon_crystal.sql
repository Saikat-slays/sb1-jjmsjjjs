create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  company text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table public.contact_submissions enable row level security;

create policy "Enable insert access for all users" on public.contact_submissions
  for insert
  to public
  with check (true);

create table public.strategy_call_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email_address text not null,
  phone_number text not null,
  company_name text not null,
  automation_goal text not null,
  created_at timestamptz default now()
);

alter table public.strategy_call_submissions enable row level security;

create policy "Allow public to insert strategy call submissions"
  on public.strategy_call_submissions
  for insert
  to public
  with check (true);