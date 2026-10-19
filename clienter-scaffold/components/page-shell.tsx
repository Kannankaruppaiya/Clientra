import { Nav } from '@/components/nav';

export function Shell({ title, action, children }:
  { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="shell">
        <div className="shell-head"><h1>{title}</h1>{action}</div>
        {children}
      </div>
      <style>{`
        .shell{max-width:1040px;margin:0 auto;padding:20px 16px 48px}
        .shell-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px}
        .shell-head h1{font-size:22px;margin:0}
        .btn{background:#e8612c;color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;text-decoration:none}
        table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #eceff3;border-radius:12px;overflow:hidden}
        th,td{text-align:left;padding:11px 14px;font-size:13.5px;border-bottom:1px solid #f0f2f6}
        th{background:#f8fafc;color:#7a8699;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
        tr:last-child td{border-bottom:none}
        .pill{font-size:12px;padding:3px 9px;border-radius:999px;background:#f5f7fa;border:1px solid #e9edf2}
        .pill.green{background:#e4f6ec;border-color:#bfe6cd;color:#1f7a44}
        .pill.amber{background:#fdf1dd;border-color:#f0d9a6;color:#9a6b12}
        .money{font-variant-numeric:tabular-nums;font-weight:600}
      `}</style>
    </>
  );
}
