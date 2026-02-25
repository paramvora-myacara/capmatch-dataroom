'use client';

import { useState, useEffect, useCallback } from 'react';

interface PageIndexProps {
  sections: { id: string; label: string }[];
}

export default function PageIndex({ sections }: PageIndexProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const updateActive = () => {
      let best: { id: string; top: number } | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 0) {
          if (best === null || rect.top > best.top) {
            best = { id: s.id, top: rect.top };
          }
        }
      }
      if (!best) {
        let closest: { id: string; top: number } | null = null;
        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top > 0 && (closest === null || rect.top < closest.top)) {
            closest = { id: s.id, top: rect.top };
          }
        }
        if (closest) best = closest;
      }
      if (best) setActiveId(best.id);
    };

    const observer = new IntersectionObserver(
      () => updateActive(),
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    updateActive();
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <nav className="hidden xl:block shrink-0 w-44 pt-1 sticky top-24 self-start space-y-1 text-[12px] max-h-[calc(100vh-8rem)] overflow-y-auto">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => handleClick(e, s.id)}
          className={`block py-1 pl-3 border-l-2 transition-colors ${
            activeId === s.id
              ? 'border-blue-500 text-blue-700 font-medium'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
