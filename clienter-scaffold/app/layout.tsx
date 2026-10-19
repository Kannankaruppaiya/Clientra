import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clienter',
  description: 'Agency CRM — run your freelance business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
