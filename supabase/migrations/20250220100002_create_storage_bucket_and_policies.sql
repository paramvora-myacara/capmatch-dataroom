-- Private bucket for data room documents (PDFs, etc.)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'dataroom-documents',
  'dataroom-documents',
  false,
  52428800,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Authenticated users can read any object in the bucket
create policy "Authenticated read dataroom-documents"
  on storage.objects for select to authenticated
  using (bucket_id = 'dataroom-documents');

-- Authenticated users can upload to the bucket
create policy "Authenticated insert dataroom-documents"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'dataroom-documents');

-- Authenticated users can update/delete (e.g. replace or remove their uploads)
create policy "Authenticated update dataroom-documents"
  on storage.objects for update to authenticated
  using (bucket_id = 'dataroom-documents');

create policy "Authenticated delete dataroom-documents"
  on storage.objects for delete to authenticated
  using (bucket_id = 'dataroom-documents');
