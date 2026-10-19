import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// auth/mfa/sync — observed in live app (REA). RLS scopes Supabase queries to the user.
export async function POST(req: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  // TODO: implement.
  return NextResponse.json({ ok: true });
}

