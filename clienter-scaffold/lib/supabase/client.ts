'use client';
import { createBrowserClient } from '@supabase/ssr';

// Browser Supabase client. Uses the PUBLIC anon key — safe to ship because
// Row Level Security (not this key) is what protects the data.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
