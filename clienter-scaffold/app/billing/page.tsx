import { Shell } from '@/components/page-shell';
export default function Page(){return(
  <Shell title="Billing" active="/billing">
    <div className="plan">
      <div className="plan-card">
        <span className="muted">Current plan</span><h2>Free</h2>
        <p className="muted">Upgrade to Pro for unlimited projects and team members.</p>
        <a className="btn" href="/billing">Upgrade to Pro — ₹199/month</a>
      </div>
      <div className="plan-card">
        <span className="muted">Subscription</span>
        <div className="kv"><span>Status</span><b>Active</b></div>
        <div className="kv"><span>Autopay</span><b>Off</b></div>
        <div className="kv"><span>Renews</span><b>—</b></div>
        <div className="kv"><span>Provider</span><b>Razorpay</b></div>
      </div>
    </div>
    <style>{`.plan{display:grid;grid-template-columns:1fr 1fr;gap:14px}
      .plan-card{background:#fff;border:1px solid #edf0f3;border-radius:14px;padding:20px}
      .plan-card h2{margin:6px 0 8px;font-size:24px}
      .kv{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f2f4f7;font-size:13.5px}
      @media(max-width:760px){.plan{grid-template-columns:1fr}}`}</style>
  </Shell>);}
