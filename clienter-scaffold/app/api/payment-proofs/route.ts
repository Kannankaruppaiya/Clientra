import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// payment-proofs — observed in live app (REA). RLS scopes Supabase queries to the user.
export async function GET(req: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  // TODO: implement.
  return NextResponse.json({ ok: true });
}

