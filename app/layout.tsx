import type { Metadata } from 'next';
import './globals.css';
import ConditionalHeader from './ConditionalHeader';
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
          <ConditionalHeader />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
