import { Shell } from '@/components/page-shell';
const rows=[{name:'Ravi Kumar',form:'Website enquiry',when:'2h ago'},{name:'Sana M',form:'Instagram DM',when:'1d ago'}];
export default function Page(){return(
  <Shell title="Intake" active="/intake">
    <table><thead><tr><th>Submission</th><th>Form</th><th>Received</th></tr></thead>
    <tbody>{rows.map((r)=>(<tr key={r.name}><td><b>{r.name}</b></td><td>{r.form}</td><td className="muted">{r.when}</td></tr>))}</tbody></table>
  </Shell>);}
