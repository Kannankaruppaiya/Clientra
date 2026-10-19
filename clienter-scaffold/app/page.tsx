import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

// Entry point — mirrors the live app: send to /dashboard if signed in, else /login.
export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  redirect(user ? '/dashboard' : '/login');
}
