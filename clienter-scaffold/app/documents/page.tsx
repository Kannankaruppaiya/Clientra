import { Shell } from '@/components/page-shell';
const rows = [
  { name: 'Quotation #Q-1042', kind: 'Quotation', client: 'Nova Studios', date: '14 Oct 2026' },
  { name: 'Retainer Agreement', kind: 'Contract', client: 'Aarav Textiles', date: '09 Oct 2026' },
  { name: 'Invoice #INV-305', kind: 'Invoice', client: 'Peak Fitness', date: '02 Oct 2026' },
];
export default function Page() {
  return (
    <Shell title="Documents" active="/documents" action={<a className="btn" href="/documents/new/quotation">+ New quotation</a>}>
      <table><thead><tr><th>Document</th><th>Type</th><th>Client</th><th>Date</th></tr></thead>
        <tbody>{rows.map((r)=>(<tr key={r.name}><td><b>{r.name}</b></td><td><span className="pill">{r.kind}</span></td><td>{r.client}</td><td>{r.date}</td></tr>))}</tbody>
      </table>
    </Shell>
  );
}
