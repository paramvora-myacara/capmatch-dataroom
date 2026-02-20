-- Activity log: signups, logins, and page views (who signed up, who is logged in, what they do)
create table if not exists public.activity_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  email text not null,
  event_type text not null check (event_type in ('signup', 'login', 'page_view')),
  metadata jsonb default '{}',
  created_at timestamptz not null default now()
);

create index if not exists activity_log_user_id_idx on public.activity_log(user_id);
create index if not exists activity_log_event_type_idx on public.activity_log(event_type);
create index if not exists activity_log_created_at_idx on public.activity_log(created_at desc);

alter table public.activity_log enable row level security;

-- Users can insert their own activity only (user_id must match auth.uid())
create policy "Users can insert own activity"
  on public.activity_log for insert to authenticated
  with check (auth.uid() = user_id);

-- Users can read their own activity (optional; for "your activity" UI)
create policy "Users can read own activity"
  on public.activity_log for select to authenticated
  using (auth.uid() = user_id);

-- Service role can do anything (for admin dashboards / reporting)
create policy "Service role full access"
  on public.activity_log for all to service_role
  using (true) with check (true);
