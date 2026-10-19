import { Shell } from '@/components/page-shell';
const rows = [
  { name: 'Admin', email: 'admin@agency.com', role: 'Owner' },
  { name: 'Priya R', email: 'priya@agency.com', role: 'Admin' },
  { name: 'Karthik S', email: 'karthik@agency.com', role: 'Teammate' },
];
export default function Page() {
  return (
    <Shell title="Team" active="/team" action={<a className="btn" href="/team">+ Invite member</a>}>
      <table><thead><tr><th>Member</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>{rows.map((r)=>(<tr key={r.email}><td><b>{r.name}</b></td><td className="muted">{r.email}</td>
          <td><span className={'pill '+(r.role==='Owner'?'green':'')}>{r.role}</span></td></tr>))}</tbody>
      </table>
    </Shell>
  );
}
