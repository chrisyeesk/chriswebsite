import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';

export const metadata: Metadata = {
  title: 'Chris\' Portfolio',
  description: 'Chris\'s Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body className="">
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
