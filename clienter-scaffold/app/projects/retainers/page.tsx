import { Shell } from '@/components/page-shell';
const money=(n:number)=>'₹'+n.toLocaleString('en-IN');
const rows=[{client:'Nova Studios',fee:60000,cycle:'Monthly',next:'01 Nov 2026'},{client:'Peak Fitness',fee:40000,cycle:'Monthly',next:'05 Nov 2026'}];
export default function Page(){return(
  <Shell title="Retainers" active="/projects/retainers" action={<a className="btn" href="/projects/retainers">+ New retainer</a>}>
    <table><thead><tr><th>Client</th><th>Fee</th><th>Cycle</th><th>Next invoice</th></tr></thead>
    <tbody>{rows.map((r)=>(<tr key={r.client}><td><b>{r.client}</b></td><td className="money">{money(r.fee)}</td><td>{r.cycle}</td><td>{r.next}</td></tr>))}</tbody></table>
  </Shell>);}
