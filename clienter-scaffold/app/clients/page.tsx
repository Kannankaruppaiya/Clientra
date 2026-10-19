import { Nav } from '@/components/nav';
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = createClient();
  // RLS scopes every query to the signed-in user automatically.
  // const { data } = await supabase.from('clients').select('*');
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <>
      <Nav />
      <div className="container">
        <h1 style={{ textTransform: 'capitalize' }}>clients</h1>
        <p>Signed in as {user?.email}. TODO: load and render clients from Supabase.</p>
      </div>
    </>
  );
}
