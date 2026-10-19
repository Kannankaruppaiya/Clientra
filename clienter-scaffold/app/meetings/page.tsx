import { Shell } from '@/components/page-shell';
const rows = [
  { title: 'Kickoff — Nova Studios', client: 'Nova Studios', when: 'Tue, 21 Oct · 11:00 AM' },
  { title: 'Review call', client: 'Aarav Textiles', when: 'Wed, 22 Oct · 03:30 PM' },
  { title: 'Discovery', client: 'Delta Retail', when: 'Fri, 24 Oct · 10:00 AM' },
];
export default function Page() {
  return (
    <Shell title="Meetings" active="/meetings" action={<a className="btn" href="/meetings">+ Schedule</a>}>
      <table><thead><tr><th>Meeting</th><th>Client</th><th>When</th></tr></thead>
        <tbody>{rows.map((r)=>(<tr key={r.title}><td><b>{r.title}</b></td><td>{r.client}</td><td>{r.when}</td></tr>))}</tbody>
      </table>
    </Shell>
  );
}
