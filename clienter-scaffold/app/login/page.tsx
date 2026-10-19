'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    // hCaptcha token is passed to Supabase, which enforces it server-side.
    const { error } = await supabase.auth.signInWithPassword({
      email, password, options: { captchaToken: captcha ?? undefined },
    });
    if (error) { setError(error.message); return; }
    router.push('/dashboard');
  }

  return (
    <div className="container" style={{ maxWidth: 360 }}>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input id="email" type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input id="password" type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        {process.env.NEXT_PUBLIC_HCAPTCHA_MODE === 'enabled' && (
          <HCaptcha sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!} onVerify={setCaptcha} />
        )}
        {error && <p style={{ color: 'crimson' }}>{error}</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
