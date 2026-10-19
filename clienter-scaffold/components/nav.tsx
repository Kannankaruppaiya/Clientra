import Link from 'next/link';

const LINKS = [
  ['/dashboard', 'Dashboard'], ['/clients', 'Clients'], ['/leads', 'Leads'],
  ['/projects', 'Projects'], ['/tasks', 'Tasks'], ['/meetings', 'Meetings'],
  ['/messages', 'Messages'], ['/documents', 'Documents'], ['/payments', 'Payments'],
  ['/payroll', 'Payroll'], ['/billing', 'Billing'], ['/team', 'Team'], ['/settings', 'Settings'],
];

export function Nav() {
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 12, padding: 16, borderBottom: '1px solid var(--line)' }}>
      {LINKS.map(([href, label]) => (
        <Link key={href} href={href}>{label}</Link>
      ))}
    </nav>
  );
}
