import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accredian Enterprise - Executive Education & Upskilling',
  description: 'Executive education and workforce upskilling landing page for Accredian Enterprise with interactive programs, live metrics, and lead intake.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7FAFC] text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-[#8EC5FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
