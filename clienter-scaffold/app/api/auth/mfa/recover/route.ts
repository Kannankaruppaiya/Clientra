import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// MFA recovery entry point (TOTP / AAL2). TODO: validate recovery code.
export async function POST() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  return NextResponse.json({ ok: true });
}
