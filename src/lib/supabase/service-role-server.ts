import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client with service role key. Bypasses RLS.
 * Use only in API routes / server code; never expose to the client.
 */
export function createServiceRoleClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase URL and SERVICE_ROLE_KEY required');
  return createClient(url, key, { auth: { persistSession: false } });
}
