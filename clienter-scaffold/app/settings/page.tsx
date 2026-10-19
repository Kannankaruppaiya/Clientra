import { Shell } from '@/components/page-shell';
const sections = [
  { h: 'Organization', fields: [['Organization name', "Admin's Agency"], ['Logo', 'Upload (PNG/JPG/WEBP, 2MB)']] },
  { h: 'Currency', fields: [['Agency currency', 'INR — Indian Rupee (₹)']] },
  { h: 'Timezone', fields: [['Timezone', 'India Standard Time (IST) — Kolkata']] },
  { h: 'Invoice & GST', fields: [['GSTIN', '—'], ['Invoice prefix', 'INV-']] },
  { h: 'Bank details', fields: [['Account', '—'], ['IFSC', '—']] },
  { h: 'Security', fields: [['Two-factor (MFA)', 'TOTP enabled'], ['Recovery codes', 'Generate']] },
];
export default function Page() {
  return (
    <Shell title="Settings" active="/settings">
      <div className="cards">
        {sections.map((s)=>(
          <section className="scard" key={s.h}>
            <h3>{s.h}</h3>
            {s.fields.map(([k,v])=>(<div className="row" key={k}><span className="muted">{k}</span><b>{v}</b></div>))}
            <button className="btn" style={{marginTop:10}}>Save</button>
          </section>
        ))}
      </div>
      <style>{`.cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .scard{background:#fff;border:1px solid #edf0f3;border-radius:14px;padding:18px}
        .scard h3{margin:0 0 12px;font-size:15px}
        .row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f2f4f7;font-size:13.5px}
        @media(max-width:760px){.cards{grid-template-columns:1fr}}`}</style>
    </Shell>
  );
}
