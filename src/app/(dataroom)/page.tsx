import Link from 'next/link';
import { DATAROOM_SECTIONS } from '@/data-room/navigation';

export default function IndexPage() {
  return (
    <article>
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">CapMatch Investor Data Room</h1>
        <p className="text-gray-500 text-sm">
          Login-protected diligence workspace — pre-seed / seed round. First-pass review: 30–45 minutes.
        </p>
      </header>

      {/* Company Snapshot */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Company Snapshot</h2>
        <div className="text-[15px] text-gray-700 space-y-3">
          <p>
            <strong>CapMatch</strong> is the operating system for commercial real estate financing from document intake to loan closing with adoption. Powered by a proven incentive system for both commercial real estate brokers and lenders.
          </p>
          <p>
            We activate distribution through broker networks and direct borrower demand, and we&apos;re building toward AI-enabled matching that standardizes lender discovery and execution.
          </p>
        </div>
      </section>

      {/* Index */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Index</h2>
        <div className="border border-gray-200 rounded-md divide-y divide-gray-100">
          {DATAROOM_SECTIONS.map((section) => (
            <Link
              key={section.slug}
              href={section.href}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-sm text-gray-700 group-hover:text-gray-900">{section.title}</span>
              <span className="text-gray-300 group-hover:text-gray-500 text-xs">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Fundraise Summary */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Fundraise</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Target raise:</strong> $3.5M pre-seed/seed</p>
          <p><strong>Contact:</strong> See Team page</p>
        </div>
      </section>
    </article>
  );
}
