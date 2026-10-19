import { AppShell } from '@/components/sidebar';

// Dashboard reconstructed from the live app (observed layout + figures).
// Sample figures are illustrative scaffold data, not live values.
const money = (n: number) => '₹' + n.toLocaleString('en-IN');

const tiles = [
  { label: 'Revenue', value: 1625000, sub: '5 new projects', note: 'Sum of new project budgets this month', icon: '↗', tone: '' },
  { label: 'Received', value: 850000, sub: 'Payments collected this month', note: '', icon: '₹', tone: '' },
  { label: 'Expenses', value: 74500, sub: 'Team payouts & tools', note: '', icon: '↘', tone: 'red' },
  { label: 'Money in account', value: 775500, sub: 'Received minus expenses', note: '', icon: '▦', tone: 'green' },
];
const sources: [string, number, string][] = [
  ['Referral', 4, 'green'], ['Website', 2, 'amber'], ['Cold Call', 2, 'blue'], ['Instagram', 2, ''],
];
const counts: [string, string, string][] = [
  ['⚠', '2', 'New projects'], ['▮', '2', 'Ongoing'], ['✓', '1', 'Completed'],
  ['↗', '5', 'Total projects'], ['○', '3', 'Total clients'],
];
const portal: [string, string][] = [['0', 'Messages'], ['0', 'Approvals'], ['0', 'Changes'], ['0', 'Referrals'], ['0', 'Reviews']];

export default function Dashboard() {
  return (
    <AppShell active="/dashboard">
      <div className="dash">
        <div className="head">
          <div>
            <h1>Welcome back, Admin</h1>
            <p className="muted">Here&apos;s what&apos;s happening with your business today.</p>
          </div>
          <div className="actions">
            <span className="date muted">Tuesday, Oct 20</span>
            <button className="ghost">&#9789; Dark mode</button>
            <button className="ghost accent">&#9023; Forecast</button>
            <button className="ghost">&#9881; Customise dashboard</button>
          </div>
        </div>

        <div className="monthbar"><span className="muted">THIS MONTH</span> <span className="month">October 2026 &#9662;</span></div>

        <div className="tiles">
          {tiles.map((t) => (
            <div className={'tile ' + t.tone} key={t.label}>
              <div className="tile-top"><span className={'tile-ic ' + t.tone}>{t.icon}</span><span className="muted">{t.label}</span></div>
              <div className={'tile-val ' + t.tone}>{money(t.value)}</div>
              <div className="tile-sub">{t.sub}</div>
              {t.note && <div className="tile-note muted">{t.note}</div>}
            </div>
          ))}
        </div>

        <div className="grid2">
          <section className="card">
            <div className="card-head"><h2><span className="dot-ic">&#9678;</span> Sales Pipeline</h2><a href="/leads">View &rarr;</a></div>
            <div className="pipe-stats">
              <div className="ps"><span className="muted">&#9678; Open</span><b>15</b></div>
              <div className="ps"><span className="muted">&#8599; Pipeline</span><b>{money(4710000)}</b></div>
              <div className="ps"><span className="muted">&#127942; Won / mo</span><b>0</b></div>
              <div className="ps"><span className="muted">% Win rate</span><b>0%</b></div>
            </div>
            <div className="sources"><span className="muted">Leads by source</span>
              {sources.map(([name, n, c]) => (<span className={'src ' + c} key={name}>{name} <b>{n}</b></span>))}
            </div>
          </section>

          <section className="card">
            <div className="card-head"><h2><span className="dot-ic">&#127760;</span> Client portal</h2><div className="tabs"><span className="tab on">Activity</span><span className="tab">Announce</span></div></div>
            <div className="portal-counts">
              {portal.map(([n, l]) => (<div key={l}><b>{n}</b><span className="muted">{l}</span></div>))}
            </div>
            <p className="muted empty">No recent portal activity.</p>
          </section>
        </div>

        <div className="counts">
          {counts.map(([ic, n, l]) => (<div className="count" key={l}><span className="count-ic">{ic}</span><b>{n}</b><span className="muted">{l}</span></div>))}
        </div>
      </div>

      <style>{`
        .dash{padding:24px 28px 48px}
        .head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap}
        .head h1{font-size:30px;margin:0 0 4px;font-weight:700}
        .muted{color:#8591a2;font-size:13px}
        .actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
        .date{margin-right:4px}
        .ghost{background:#fff;border:1px solid #e6eaef;border-radius:9px;padding:8px 13px;font-size:13px;cursor:pointer;color:#44506280;color:#45506a}
        .accent{color:#e8612c;border-color:#f3c9b5}
        .monthbar{margin:20px 0 14px;font-size:13px;display:flex;align-items:center;gap:8px}
        .month{background:#fff;border:1px solid #e6eaef;border-radius:8px;padding:6px 12px;font-weight:600;font-size:13px}
        .tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
        .tile{background:#fff;border:1px solid #edf0f3;border-radius:16px;padding:18px}
        .tile.green{background:#f0faf4;border-color:#cdeedb}
        .tile-top{display:flex;align-items:center;gap:9px;margin-bottom:12px}
        .tile-ic{width:30px;height:30px;display:grid;place-items:center;background:#fdece4;color:#e8612c;border-radius:9px;font-size:14px}
        .tile-ic.red{background:#fde8e6;color:#d8462f}
        .tile-ic.green{background:#def1e6;color:#1f9254}
        .tile-val{font-size:30px;font-weight:700;letter-spacing:-1px}
        .tile-val.red{color:#d8462f}
        .tile-val.green{color:#1f9254}
        .tile-sub{font-size:13px;margin-top:6px;color:#55617280;color:#556172}
        .tile-note{margin-top:4px}
        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
        .card{background:#fff;border:1px solid #edf0f3;border-radius:16px;padding:18px}
        .card-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
        .card-head h2{font-size:16px;margin:0;display:flex;align-items:center;gap:8px}
        .dot-ic{color:#e8612c}
        .card-head a{font-size:13px;text-decoration:none;color:#e8612c}
        .pipe-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}
        .ps{background:#f8fafc;border-radius:10px;padding:11px 12px;display:flex;flex-direction:column;gap:4px}
        .ps b{font-size:18px}
        .sources{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
        .src{background:#f5f7fa;border:1px solid #e9edf2;border-radius:999px;padding:4px 11px;font-size:12px}
        .src.green{background:#e4f6ec;border-color:#bfe6cd;color:#1f7a44}
        .src.amber{background:#fdf1dd;border-color:#f0d9a6;color:#9a6b12}
        .src.blue{background:#e6f0fb;border-color:#c3dbf5;color:#2d6ac2}
        .tabs{display:flex;gap:0;background:#f2f5f8;border-radius:9px;padding:3px}
        .tab{font-size:13px;padding:5px 14px;border-radius:7px;color:#8591a2}
        .tab.on{background:#fff;color:#2a3140;font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.05)}
        .portal-counts{display:flex;gap:28px;flex-wrap:wrap;margin-bottom:16px}
        .portal-counts div{display:flex;flex-direction:column;align-items:center}
        .portal-counts b{font-size:22px}
        .empty{text-align:center;padding:14px 0}
        .counts{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px;margin-top:16px}
        .count{background:#fff;border:1px solid #edf0f3;border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:3px}
        .count-ic{color:#b4bfcd;font-size:14px}
        .count b{font-size:24px}
        @media(max-width:760px){.grid2{grid-template-columns:1fr}.pipe-stats{grid-template-columns:1fr 1fr}.dash{padding:20px 16px}}
      `}</style>
    </AppShell>
  );
}
