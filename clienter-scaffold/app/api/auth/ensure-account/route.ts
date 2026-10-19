import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// After sign-up/first login, make sure a profile + org membership row exists.
export async function POST() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  // RLS lets the user upsert only their own profile row.
  await supabase.from('profiles').upsert({ id: user.id, email: user.email }).select();
  return NextResponse.json({ ok: true });
}
