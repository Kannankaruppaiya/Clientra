import { Shell } from '@/components/page-shell';

const rows = [
  { name: 'Brightline Co', stage: 'Qualified', source: 'Referral' },
  { name: 'Mango Media', stage: 'Proposal', source: 'Website' },
  { name: 'Skyward Labs', stage: 'New', source: 'Instagram' },
  { name: 'Delta Retail', stage: 'New', source: 'Cold Call' },
];
const cls = (s: string) => (s === 'Qualified' ? 'green' : s === 'Proposal' ? 'amber' : '');

export default async function Page() {
  return (
    <Shell title="Leads" action={<a className="btn" href="/leads">+ Add lead</a>}>
      <table>
        <thead><tr><th>Lead</th><th>Stage</th><th>Source</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}><td><b>{r.name}</b></td>
              <td><span className={'pill ' + cls(r.stage)}>{r.stage}</span></td>
              <td>{r.source}</td></tr>
          ))}
        </tbody>
      </table>
    </Shell>
  );
}
