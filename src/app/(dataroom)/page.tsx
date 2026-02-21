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
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">CapMatch Company Snapshot</h2>
        <div className="text-[15px] text-gray-700 space-y-4">
          <p>
            <strong>CapMatch</strong> is the operating system for commercial real estate financing — from document intake to loan closing — with real adoption. We are powered by a proven incentive system for both commercial real estate brokers and lenders, and we activate distribution through broker networks and direct borrower demand.
          </p>
          <p>
            Our platform unifies fragmented workflows (email, PDFs, spreadsheets) into a single pipeline: borrower intake, AI-powered packaging and underwriting, lender matching, and closing. We are building toward AI-enabled matching that standardizes lender discovery and execution across a market of 3,000+ lenders with no common format.
          </p>
          <p>
            <strong>Market:</strong> We focus on multifamily, Opportunity Zone, and development debt in a $1T+ CRE debt market. Target customers include sponsors, developers, and brokers who need faster, more transparent capital placement.
          </p>
          <p>
            <strong>Traction:</strong> CapMatch has $291M in contracted loan volume across 7 deals in processing and 4 brokerages providing deal flow, with implied revenue at conversion (1% fee) of ~$2.9M. Leadership brings $2B+ in transaction volume experience and deep CRE and tech backgrounds.
          </p>
        </div>
      </section>

      {/* Index */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Index</h2>
        <p className="text-sm text-gray-500 mb-4">Jump to any section of the data room. Each link opens the corresponding part of the deck.</p>
        <div className="border border-gray-200 rounded-md divide-y divide-gray-100">
          {DATAROOM_SECTIONS.map((section) => (
            <Link
              key={section.slug}
              href={section.href}
              className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">{section.title}</span>
                <span className="text-gray-300 group-hover:text-gray-500 text-xs shrink-0 ml-2">→</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 pr-6">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Fundraise Summary */}
      <section className="mb-12">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Fundraise</h2>
        <div className="text-sm text-gray-700 space-y-4">
          <p><strong>Target raise:</strong> $3.5M pre-seed / seed</p>
          <p>
            <strong>Use of funds:</strong> Product and engineering (lender matching module, lender/buy-box data integration, productionized AI matching); growth and distribution (broker and lender onboarding); and operations (security, compliance, SOC2 path).
          </p>
          <p>
            <strong>Round focus:</strong> Pre-seed and seed investors. We are raising to scale contracted pipeline into repeatable platform revenue, expand broker and lender coverage, and solidify our position as the operating system for CRE debt.
          </p>
          <p>
            <strong>Contact & next steps:</strong> For more detail, expression of interest, or to request access to this data room, visit <a href="https://invest.capmatch.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">invest.capmatch.com</a> or see the Team page for key contacts.
          </p>
        </div>
      </section>
    </article>
  );
}
