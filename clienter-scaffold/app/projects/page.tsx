import { Shell } from '@/components/page-shell';
const money = (n: number) => '₹' + n.toLocaleString('en-IN');

const rows = [
  { name: 'Brand Refresh', client: 'Nova Studios', budget: 450000, status: 'Ongoing' },
  { name: 'Q4 Campaign', client: 'Aarav Textiles', budget: 320000, status: 'Ongoing' },
  { name: 'Website Build', client: 'Peak Fitness', budget: 280000, status: 'Completed' },
];

export default async function Page() {
  return (
    <Shell title="Projects" active="/projects" action={<a className="btn" href="/projects">+ New project</a>}>
      <table>
        <thead><tr><th>Project</th><th>Client</th><th>Budget</th><th>Status</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}><td><b>{r.name}</b></td><td>{r.client}</td>
              <td className="money">{money(r.budget)}</td>
              <td><span className={'pill ' + (r.status === 'Completed' ? 'green' : 'amber')}>{r.status}</span></td></tr>
          ))}
        </tbody>
      </table>
    </Shell>
  );
}
