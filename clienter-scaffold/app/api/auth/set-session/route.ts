import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// Persists a session returned by the client into http-only cookies.
export async function POST(req: Request) {
  const { access_token, refresh_token } = await req.json();
  const supabase = createClient();
  const { error } = await supabase.auth.setSession({ access_token, refresh_token });
  if (error) return NextResponse.json({ error: error.message }, { status: 401 });
  return NextResponse.json({ ok: true });
}
