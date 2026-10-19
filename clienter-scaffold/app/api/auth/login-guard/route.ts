import { NextResponse } from 'next/server';
import { verifyHcaptcha } from '@/lib/hcaptcha';

// Verifies the hCaptcha token before the client is allowed to attempt login.
export async function POST(req: Request) {
  const { captchaToken } = await req.json().catch(() => ({ captchaToken: null }));
  const ok = await verifyHcaptcha(captchaToken);
  if (!ok) return NextResponse.json({ error: 'captcha_failed' }, { status: 400 });
  return NextResponse.json({ ok: true });
}
