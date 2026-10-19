import { Shell } from '@/components/page-shell';
// import { createClient } from '@/lib/supabase/server';

const rows = [
  { name: 'Aarav Textiles', phone: '+91 98400 11223', created: '12 Oct 2026' },
  { name: 'Nova Studios', phone: '+91 99620 55110', created: '08 Oct 2026' },
  { name: 'Peak Fitness', phone: '+91 90030 77821', created: '29 Sep 2026' },
];

export default async function Page() {
  // const supabase = createClient();
  // const { data: rows } = await supabase.from('clients').select('name,phone,created_at');
  return (
    <Shell title="Clients" action={<a className="btn" href="/clients/new">+ New client</a>}>
      <table>
        <thead><tr><th>Name</th><th>Phone</th><th>Added</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}><td><b>{r.name}</b></td><td>{r.phone}</td><td>{r.created}</td></tr>
          ))}
        </tbody>
      </table>
    </Shell>
  );
}
