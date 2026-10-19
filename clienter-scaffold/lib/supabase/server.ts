import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Server Supabase client (route handlers, server components, server actions).
// Still uses the anon key + the user's session cookie, so RLS applies.
export function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // called from a Server Component — safe to ignore when middleware refreshes sessions
          }
        },
      },
    }
  );
}

// Service-role client — bypasses RLS. SERVER ONLY. Never import into client code.
import { createClient as createAdminClient } from '@supabase/supabase-js';
export function createServiceClient() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
