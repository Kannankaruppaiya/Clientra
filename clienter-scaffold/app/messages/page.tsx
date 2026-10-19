import { Shell } from '@/components/page-shell';
const rows = [
  { who: 'Nova Studios', last: 'Can we move the call to Thursday?', time: '2h' },
  { who: 'Peak Fitness', last: 'Invoice received, thank you!', time: '1d' },
  { who: 'Aarav Textiles', last: 'Sharing the brand guidelines now.', time: '3d' },
];
export default function Page() {
  return (
    <Shell title="Messages" active="/messages">
      <table><thead><tr><th>Conversation</th><th>Last message</th><th></th></tr></thead>
        <tbody>{rows.map((r)=>(<tr key={r.who}><td><b>{r.who}</b></td><td className="muted">{r.last}</td><td style={{textAlign:'right',color:'#8591a2'}}>{r.time}</td></tr>))}</tbody>
      </table>
    </Shell>
  );
}
