import { Shell } from '@/components/page-shell';
const money=(n:number)=>'₹'+n.toLocaleString('en-IN');
const rows = [
  { name: 'Priya R', role: 'Designer', amount: 45000, status: 'Paid' },
  { name: 'Karthik S', role: 'Developer', amount: 55000, status: 'Pending' },
  { name: 'Meena V', role: 'Content', amount: 30000, status: 'Paid' },
];
export default function Page() {
  return (
    <Shell title="Payroll" active="/payroll" action={<a className="btn" href="/payroll">Run payroll</a>}>
      <table><thead><tr><th>Member</th><th>Role</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>{rows.map((r)=>(<tr key={r.name}><td><b>{r.name}</b></td><td>{r.role}</td><td className="money">{money(r.amount)}</td>
          <td><span className={'pill '+(r.status==='Paid'?'green':'amber')}>{r.status}</span></td></tr>))}</tbody>
      </table>
    </Shell>
  );
}
