import { AppShell } from '@/components/sidebar';
const cols = [
  { name: 'To do', items: ['Draft Q4 proposal', 'Collect brand assets'] },
  { name: 'In progress', items: ['Homepage design', 'Logo revisions'] },
  { name: 'Review', items: ['Campaign copy'] },
  { name: 'Done', items: ['Kickoff meeting', 'Contract signed'] },
];
export default function Page() {
  return (
    <AppShell active="/tasks">
      <div className="wrap">
        <h1>Tasks</h1><p className="muted">Project task boards</p>
        <div className="board">
          {cols.map((c) => (
            <div className="col" key={c.name}>
              <div className="col-h">{c.name} <span>{c.items.length}</span></div>
              {c.items.map((t) => (<div className="task" key={t}>{t}</div>))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .wrap{padding:24px 28px 48px}.wrap h1{font-size:26px;margin:0}.muted{color:#8591a2;font-size:13px;margin:4px 0 18px}
        .board{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .col{background:#f1f4f7;border-radius:12px;padding:12px;min-height:200px}
        .col-h{font-size:13px;font-weight:600;color:#55617a;display:flex;justify-content:space-between;margin-bottom:10px}
        .col-h span{background:#fff;border-radius:999px;padding:1px 8px;color:#8591a2}
        .task{background:#fff;border:1px solid #e9edf2;border-radius:9px;padding:10px 12px;font-size:13px;margin-bottom:8px}
        @media(max-width:760px){.board{grid-template-columns:1fr 1fr}.wrap{padding:20px 16px}}
      `}</style>
    </AppShell>
  );
}
