import Link from 'next/link';
import { DATAROOM_SECTIONS } from '@/data-room/navigation';
import CompetitiveAnalysisGraph from '@/components/CompetitiveAnalysisGraph';

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
            <strong>CapMatch</strong> is the operating system for CRE debt — bringing the financing workflow from document intake to closing into one secure platform.
          </p>
          <p>
            We activate distribution through broker networks and direct borrower demand, and we&apos;re building toward AI-enabled matching that standardizes lender discovery and execution.
          </p>
        </div>
      </section>

      {/* Built vs In Progress */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">What Exists Today vs. What&apos;s Next</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide">Live today</h3>
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Platform workflow for deal intake, packaging, execution support</li>
              <li>Broker distribution pipeline</li>
              <li>$291M in loan volume, 4 brokerages, 7 projects in processing</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide">In progress</h3>
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Lender matching module (in build)</li>
              <li>Dependent on lender/buy-box data acquisition</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="text-[13px] font-semibold text-gray-900 mb-2 uppercase tracking-wide">Next</h3>
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
              <li>Data acquisition + integration for lender matching</li>
              <li>Productionize matching and outreach automation</li>
            </ul>
          </div>
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
          <p><strong>Use of proceeds:</strong> See Financial Overview</p>
          <p><strong>Contact:</strong> See Team page</p>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Competitive Positioning</h2>
        <div className="mb-6">
          <CompetitiveAnalysisGraph />
        </div>
        <div className="text-[15px] text-gray-700 space-y-3">
          <p>
            Competitors do lending OR software. CapMatch is building the operating system for all CRE capital markets — occupying the high-automation, high-integration quadrant.
          </p>
          <p>
            First-mover advantage and ability to scale quickly position us ~18 months ahead. Each transaction trains our AI, creating a data moat. Winner-take-most dynamics (like Uber/Airbnb) favor the platform that reaches critical mass first.
          </p>
        </div>
      </section>
    </article>
  );
}
