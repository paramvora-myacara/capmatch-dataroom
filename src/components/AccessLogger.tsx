'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AccessLogger() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname === '/login') return;
    fetch('/api/log-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname, action: 'view' }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
