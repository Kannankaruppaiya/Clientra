import { AppShell } from '@/components/sidebar';

export function Shell({ title, active, action, children }:
  { title: string; active?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <AppShell active={active}>
      <div className="shell">
        <div className="shell-head"><h1>{title}</h1>{action}</div>
        {children}
      </div>
      <style>{`
        .shell{padding:24px 28px 48px}
        .shell-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px}
        .shell-head h1{font-size:26px;margin:0;font-weight:700}
        .btn{background:#e8612c;color:#fff;border:none;border-radius:9px;padding:9px 15px;font-size:13px;cursor:pointer;text-decoration:none}
        table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #edf0f3;border-radius:14px;overflow:hidden}
        th,td{text-align:left;padding:12px 16px;font-size:13.5px;border-bottom:1px solid #f0f2f6}
        th{background:#f8fafc;color:#8591a2;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
        tr:last-child td{border-bottom:none}
        .pill{font-size:12px;padding:3px 10px;border-radius:999px;background:#f5f7fa;border:1px solid #e9edf2}
        .pill.green{background:#e4f6ec;border-color:#bfe6cd;color:#1f7a44}
        .pill.amber{background:#fdf1dd;border-color:#f0d9a6;color:#9a6b12}
        .money{font-variant-numeric:tabular-nums;font-weight:600}
        @media(max-width:760px){.shell{padding:20px 16px}}
      `}</style>
    </AppShell>
  );
}
