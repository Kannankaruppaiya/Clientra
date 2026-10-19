import { createServiceClient } from '@/lib/supabase/server';

// Super-admin area. Access control MUST be enforced server-side
// (check the user's role), not by the email in the bundle.
export default async function Page() {
  return (
    <div className="container">
      <h1 style={{ textTransform: 'capitalize' }}>Admin · feedback</h1>
      <p>TODO: verify super-admin role server-side before rendering.</p>
    </div>
  );
}
