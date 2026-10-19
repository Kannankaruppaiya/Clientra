import Link from 'next/link';

const MENU: [string, string, string, string?][] = [
  ['/dashboard', 'Dashboard', '▣'],
  ['/leads', 'Leads', '◎'],
  ['/clients', 'Clients', '◉'],
  ['/projects', 'Projects', '▤'],
  ['/projects/retainers', 'Retainers', '↻'],
  ['/payments', 'Payments', '₹'],
  ['/payroll', 'Payroll', '▦'],
  ['/messages', 'Messages', '▭'],
  ['/meetings', 'Meetings', '□'],
  ['/tasks', 'Tasks', '✓', 'Project task boards'],
  ['/documents', 'Documents', '✎', 'Quotations & contracts'],
  ['/team', 'Team', '●'],
];

export function Sidebar({ active = '/dashboard' }: { active?: string }) {
  return (
    <aside className="sb">
      <div className="sb-brand"><span className="sb-logo">C</span> Clienter</div>
      <nav className="sb-menu">
        {MENU.map(([href, label, icon, sub]) => (
          <Link key={href} href={href} className={'sb-item' + (href === active ? ' on' : '')}>
            <span className="sb-ic">{icon}</span>
            <span className="sb-lab">{label}{sub && <small>{sub}</small>}</span>
          </Link>
        ))}
      </nav>
      <div className="sb-foot">
        <div className="sb-pro"><b>Upgrade to Pro</b><span>₹199/month</span></div>
        <div className="sb-acct"><span className="sb-av">A</span><div><b>Admin&apos;s Agency</b><small>Free</small></div></div>
      </div>
      <style>{`
        .sb{width:230px;flex:none;background:#fff;border-right:1px solid #eef1f4;height:100vh;position:sticky;top:0;display:flex;flex-direction:column;padding:14px 10px}
        .sb-brand{display:flex;align-items:center;gap:8px;font-weight:700;font-size:18px;padding:6px 8px 16px}
        .sb-logo{width:28px;height:28px;background:#e8612c;color:#fff;border-radius:8px;display:grid;place-items:center;font-size:15px}
        .sb-menu{display:flex;flex-direction:column;gap:2px;overflow-y:auto;flex:1}
        .sb-item{display:flex;align-items:center;gap:11px;padding:9px 11px;border-radius:9px;text-decoration:none;color:#44506280;color:#425066;font-size:14px}
        .sb-item:hover{background:#f6f8fa}
        .sb-item.on{background:#fdece4;color:#e8612c;font-weight:600}
        .sb-ic{width:20px;text-align:center;opacity:.8}
        .sb-lab{display:flex;flex-direction:column;line-height:1.2}
        .sb-lab small{color:#9aa6b6;font-size:10.5px;font-weight:400}
        .sb-foot{display:flex;flex-direction:column;gap:8px;padding-top:10px}
        .sb-pro{background:#fdece4;border-radius:10px;padding:10px 12px;display:flex;flex-direction:column}
        .sb-pro b{font-size:13px;color:#e8612c}.sb-pro span{font-size:11px;color:#c9743f}
        .sb-acct{display:flex;align-items:center;gap:9px;padding:6px 4px}
        .sb-av{width:30px;height:30px;background:#2a3140;color:#fff;border-radius:8px;display:grid;place-items:center;font-size:13px}
        .sb-acct b{font-size:13px;display:block}.sb-acct small{color:#9aa6b6;font-size:11px}
        @media(max-width:760px){.sb{display:none}}
      `}</style>
    </aside>
  );
}

export function AppShell({ active, children }: { active?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f6f7f9' }}>
      <Sidebar active={active} />
      <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
    </div>
  );
}
