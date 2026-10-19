import { Nav } from '@/components/nav';
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = createClient();
  // RLS scopes every query to the signed-in user automatically.
  // const { data } = await supabase.from('meetings').select('*');
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <>
      <Nav />
      <div className="container">
        <h1 style={{ textTransform: 'capitalize' }}>meetings</h1>
        <p>Signed in as {user?.email}. TODO: load and render meetings from Supabase.</p>
      </div>
    </>
  );
}
