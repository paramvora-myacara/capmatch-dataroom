-- Allow activity_log rows without a Supabase auth user (dataroom session-only users).
alter table public.activity_log
  alter column user_id drop not null;

-- Drop FK so we can insert user_id null (optional; keeps referential integrity if we ever add users)
-- Keeping the FK would require a placeholder auth.users row; we drop it for simplicity.
alter table public.activity_log
  drop constraint if exists activity_log_user_id_fkey;
