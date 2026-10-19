// Server-side hCaptcha verification. Call this in any auth route that accepts
// a captcha token before trusting the request.
export async function verifyHcaptcha(token: string | null): Promise<boolean> {
  if (process.env.NEXT_PUBLIC_HCAPTCHA_MODE !== 'enabled') return true;
  if (!token) return false;
  const res = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: process.env.HCAPTCHA_SECRET!, response: token }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}
