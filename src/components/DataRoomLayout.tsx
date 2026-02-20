'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccessLogger from './AccessLogger';
import Image from 'next/image';
import { DATAROOM_SECTIONS } from '@/data-room/navigation';
import { LogOut, FileText, MessageCircle, Menu, X } from 'lucide-react';
import ContactUsModal from './ContactUsModal';

interface DataRoomLayoutProps {
  children: React.ReactNode;
}

export default function DataRoomLayout({ children }: DataRoomLayoutProps) {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/login';
  };

  const sidebarContent = (
    <>
      <div className="px-5 py-5 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/CapMatchLogo.png" alt="CapMatch" width={32} height={32} unoptimized />
          <div>
            <span className="font-semibold text-gray-900 text-sm tracking-tight">CapMatch</span>
            <span className="block text-[11px] text-gray-400 tracking-wide uppercase">Data Room</span>
          </div>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {DATAROOM_SECTIONS.map((section) => {
          const isActive = pathname === section.href || (section.href !== '/' && pathname.startsWith(section.href));
          return (
            <Link
              key={section.slug}
              href={section.href}
              onClick={() => setMobileNavOpen(false)}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
              {section.title}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-gray-200 space-y-0.5">
        <button
          onClick={() => { setContactOpen(true); setMobileNavOpen(false); }}
          className="flex items-center gap-2.5 w-full px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Contact
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 w-full px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <AccessLogger />

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/CapMatchLogo.png" alt="CapMatch" width={28} height={28} unoptimized />
          <span className="font-semibold text-gray-900 text-sm">Data Room</span>
        </Link>
        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="p-1.5 text-gray-600">
          {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/20" onClick={() => setMobileNavOpen(false)}>
          <aside
            className="w-72 bg-white h-full flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 bg-white border-r border-gray-200 flex-col fixed left-0 top-0 bottom-0 z-30">
        {sidebarContent}
      </aside>

      <ContactUsModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Main content */}
      <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 lg:py-14">{children}</div>
      </main>
    </div>
  );
}
