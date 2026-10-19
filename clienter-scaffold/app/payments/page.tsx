import { Shell } from '@/components/page-shell';
const money = (n: number) => '₹' + n.toLocaleString('en-IN');

const rows = [
  { client: 'Nova Studios', project: 'Brand Refresh', amount: 225000, date: '14 Oct 2026' },
  { client: 'Aarav Textiles', project: 'Q4 Campaign', amount: 160000, date: '10 Oct 2026' },
  { client: 'Peak Fitness', project: 'Website Build', amount: 280000, date: '02 Oct 2026' },
];

export default async function Page() {
  return (
    <Shell title="Payments" action={<a className="btn" href="/payments">Record payment</a>}>
      <table>
        <thead><tr><th>Client</th><th>Project</th><th>Amount</th><th>Date</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}><td><b>{r.client}</b></td><td>{r.project}</td>
              <td className="money">{money(r.amount)}</td><td>{r.date}</td></tr>
          ))}
        </tbody>
      </table>
    </Shell>
  );
}
