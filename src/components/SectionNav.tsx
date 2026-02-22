'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DATAROOM_SECTIONS } from '@/data-room/navigation';

export default function SectionNav() {
  const pathname = usePathname();
  // Skip the first entry ("Read Me First" / index)
  const sections = DATAROOM_SECTIONS.slice(1);
  const currentIndex = sections.findIndex(
    (s) => s.href === pathname || (s.href !== '/' && pathname.startsWith(s.href)),
  );

  const prev = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const next = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <nav className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-0.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span className="text-xs text-gray-400 group-hover:text-gray-500">← Previous</span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-0.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span className="text-xs text-gray-400 group-hover:text-gray-500">Next →</span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
