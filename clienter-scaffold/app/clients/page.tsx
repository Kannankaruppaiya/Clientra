'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { AppShell } from '@/components/sidebar';

type Client = { name: string; phone: string; created: string };
const seed: Client[] = [
  { name: 'Aarav Textiles', phone: '+91 98400 11223', created: '12 Oct 2026' },
  { name: 'Nova Studios', phone: '+91 99620 55110', created: '08 Oct 2026' },
  { name: 'Peak Fitness', phone: '+91 90030 77821', created: '29 Sep 2026' },
];

export default function Page() {
  const [rows, setRows] = useState(seed);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function addClient() {
    // Real validation + toast copy taken from the live app.
    if (!name.trim()) { toast.error('Client name is required'); return; }
    setRows([{ name, phone: phone || '—', created: 'Today' }, ...rows]);
    setName(''); setPhone(''); setOpen(false);
    toast.success('Client added');
  }

  return (
    <AppShell active="/clients">
      <div className="shell">
        <div className="shell-head"><h1>Clients</h1>
          <button className="btn" onClick={() => setOpen(true)}>+ New client</button></div>

        {open && (
          <div className="form">
            <input placeholder="Client name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button className="btn" onClick={addClient}>Add</button>
            <button className="ghost" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        )}

        <table>
          <thead><tr><th>Name</th><th>Phone</th><th>Added</th></tr></thead>
          <tbody>{rows.map((r, i) => (
            <tr key={i}><td><b>{r.name}</b></td><td>{r.phone}</td><td>{r.created}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <style>{`
        .shell{padding:24px 28px 48px}
        .shell-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
        .shell-head h1{font-size:26px;margin:0;font-weight:700}
        .btn{background:#e8612c;color:#fff;border:none;border-radius:9px;padding:9px 15px;font-size:13px;cursor:pointer}
        .ghost{background:#fff;border:1px solid #e6eaef;border-radius:9px;padding:9px 13px;font-size:13px;cursor:pointer}
        .form{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
        .form input{border:1px solid #e6eaef;border-radius:9px;padding:9px 12px;font-size:13px}
        table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #edf0f3;border-radius:14px;overflow:hidden}
        th,td{text-align:left;padding:12px 16px;font-size:13.5px;border-bottom:1px solid #f0f2f6}
        th{background:#f8fafc;color:#8591a2;font-weight:600;font-size:12px;text-transform:uppercase}
        tr:last-child td{border-bottom:none}
      `}</style>
    </AppShell>
  );
}
