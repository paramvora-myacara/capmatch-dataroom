-- Allowlist of emails that can sign in to the data room (with shared password).
-- Managed by admin at /admin; app uses service role to read/write.
create table if not exists public.dataroom_allowed_emails (
  email text primary key
);

comment on table public.dataroom_allowed_emails is 'Emails allowed to sign in to the dataroom (with shared password). Managed by admin only.';
