'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AccessLogger() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname === '/login') return;
    fetch('/api/log-activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'page_view',
        metadata: { page: pathname },
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
