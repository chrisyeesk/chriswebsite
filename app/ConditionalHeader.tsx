'use client';

import { usePathname } from 'next/navigation';
import Header from './components/header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Only show header on portfolio page
  const showHeader = pathname === '/portfolio';
  
  return showHeader ? <Header /> : null;
}
