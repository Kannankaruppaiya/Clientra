import { Nav } from '@/components/nav';

// Dashboard reconstructed from the live app (observed layout + figures).
// Sample figures are illustrative scaffold data, not live values.
const money = (n: number) => '₹' + n.toLocaleString('en-IN');

const tiles = [
  { label: 'Revenue', value: 1625000, sub: '5 new projects', note: 'Sum of new project budgets this month', icon: '↗' },
  { label: 'Received', value: 850000, sub: 'Payments collected this month', note: '', icon: '↓' },
  { label: 'Expenses', value: 74500, sub: 'Team payouts & tools', note: '', icon: '→' },
  { label: 'Money in account', value: 775500, sub: 'Received minus expenses', note: '', icon: '●' },
];
const pipeline = [
  ['Referral', 4], ['Website', 2], ['Cold Call', 2], ['Instagram', 2],
] as const;
const counts = [
  ['2', 'New projects'], ['2', 'Ongoing'], ['1', 'Completed'], ['5', 'Total projects'], ['3', 'Total clients'],
] as const;
const portal = [['0', 'Messages'], ['0', 'Approvals'], ['0', 'Changes'], ['0', 'Referrals'], ['0', 'Reviews']] as const;

export default function Dashboard() {
  return (
    <>
      <Nav />
      <div className="dash">
        <div className="head">
          <div>
            <h1>Welcome back, Admin!</h1>
            <p className="muted">Here&apos;s what&apos;s happening with your business today.</p>
          </div>
          <div className="actions">
            <button className="ghost">Dark mode</button>
            <button className="ghost accent">Forecast</button>
            <button className="ghost">Customise</button>
          </div>
        </div>

        <div className="monthbar"><span className="muted">THIS MONTH</span> <b>October 2026</b></div>

        <div className="tiles">
          {tiles.map((t) => (
            <div className="tile" key={t.label}>
              <div className="tile-top"><span className="tile-ic">{t.icon}</span><span className="muted">{t.label}</span></div>
              <div className="tile-val">{money(t.value)}</div>
              <div className="tile-sub">{t.sub}</div>
              {t.note && <div className="tile-note muted">{t.note}</div>}
            </div>
          ))}
        </div>

        <div className="grid2">
          <section className="card">
            <div className="card-head"><h2>Sales Pipeline</h2><a href="/leads">View &rsaquo;</a></div>
            <div className="pipe-stats">
              <div><span className="muted">Open</span><b>15</b></div>
              <div><span className="muted">Pipeline</span><b>{money(4710000)}</b></div>
              <div><span className="muted">Won / mo</span><b>0</b></div>
              <div><span className="muted">Win rate</span><b>0%</b></div>
            </div>
            <div className="sources">
              {pipeline.map(([name, n]) => (
                <span className="src" key={name}>{name} <b>{n}</b></span>
              ))}
            </div>
          </section>

          <section className="card">
            <div className="card-head"><h2>Client portal</h2><div className="tabs"><span className="tab on">Activity</span><span className="tab">Announce</span></div></div>
            <div className="portal-counts">
              {portal.map(([n, l]) => (<div key={l}><b>{n}</b><span className="muted">{l}</span></div>))}
            </div>
            <p className="muted empty">No recent portal activity.</p>
          </section>
        </div>

        <div className="counts">
          {counts.map(([n, l]) => (<div className="count" key={l}><b>{n}</b><span className="muted">{l}</span></div>))}
        </div>
      </div>

      <style>{`
        .dash{max-width:1040px;margin:0 auto;padding:20px 16px 48px}
        .head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap}
        .head h1{font-size:24px;margin:0 0 4px}
        .muted{color:#7a8699;font-size:13px}
        .actions{display:flex;gap:8px;flex-wrap:wrap}
        .ghost{background:#fff;border:1px solid #e2e6ec;border-radius:8px;padding:7px 12px;font-size:13px;cursor:pointer}
        .accent{color:#e8612c;border-color:#f3c3ad}
        .monthbar{margin:18px 0 12px;font-size:13px}
        .tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
        .tile{background:#fff;border:1px solid #eceff3;border-radius:14px;padding:16px}
        .tile-top{display:flex;align-items:center;gap:8px;margin-bottom:10px}
        .tile-ic{width:26px;height:26px;display:grid;place-items:center;background:#fdece4;color:#e8612c;border-radius:7px;font-size:13px}
        .tile-val{font-size:26px;font-weight:700;letter-spacing:-.5px}
        .tile-sub{font-size:13px;margin-top:4px}
        .tile-note{margin-top:6px}
        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
        .card{background:#fff;border:1px solid #eceff3;border-radius:14px;padding:16px}
        .card-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
        .card-head h2{font-size:15px;margin:0}
        .card-head a{font-size:13px;text-decoration:none;color:#e8612c}
        .pipe-stats{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:14px}
        .pipe-stats div{display:flex;flex-direction:column;gap:2px}
        .pipe-stats b{font-size:17px}
        .sources{display:flex;gap:8px;flex-wrap:wrap}
        .src{background:#f5f7fa;border:1px solid #e9edf2;border-radius:999px;padding:4px 11px;font-size:12px}
        .tabs{display:flex;gap:6px}
        .tab{font-size:12px;padding:4px 10px;border-radius:999px;background:#f5f7fa;color:#7a8699}
        .tab.on{background:#fdece4;color:#e8612c}
        .portal-counts{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:10px}
        .portal-counts div{display:flex;flex-direction:column}
        .portal-counts b{font-size:20px}
        .empty{padding:8px 0}
        .counts{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-top:14px}
        .count{background:#fff;border:1px solid #eceff3;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:2px}
        .count b{font-size:22px}
        @media(max-width:640px){.grid2{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
