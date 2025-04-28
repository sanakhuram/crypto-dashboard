import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'Live crypto price tracker powered by CoinGecko API',
  icons: {
    icon: '/favicon-v2.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
