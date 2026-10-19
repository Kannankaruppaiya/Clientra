import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <div className="container">
      <h1 style={{ textTransform: 'capitalize' }}>Teammate · meetings</h1>
      <p>Scoped to teammate role. Signed in as {user?.email}.</p>
    </div>
  );
}
