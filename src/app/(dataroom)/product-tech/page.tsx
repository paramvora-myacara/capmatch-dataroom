import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function ProductTechPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Product + Tech Overview</h1>
      </header>
      
      <DocumentSection title="2.1 Product + Tech Overview (Single Umbrella Doc)">
        <div className="space-y-8">
          {/* Built vs In Progress Box */}
          <div className="border border-gray-200 rounded-md p-5">
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wide">Built vs In Progress</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Built now</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Packaging/workflows</li>
                  <li>Core platform</li>
                  <li>Current data ingestion</li>
                  <li>Automation, evaluation approach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">In progress</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Lender matching module</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Planned next</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Purchase + integration of lender/buy-box data</li>
                  <li>Productionize matching</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Product today (what exists now)</h3>
            <p className="text-gray-700 text-sm">
              End-to-end workflow: borrower intake → packaging → lender outreach/matching → close. One platform from first call to wire transfer. 30-second OMs with live updates. AI-assisted matchmaking (in build).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Workflow &amp; roles (Borrower / Broker / Lender)</h3>
            <p className="text-gray-700 text-sm">
              Borrowers build profiles once; lenders receive standardized deal packages; advisors manage unlimited deals with workflow automation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. Architecture (high level)</h3>
            <p className="text-gray-500 text-sm">[NEEDED — CTO]</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Data sources &amp; provenance</h3>
            <p className="text-gray-700 text-sm">
              Current ingestion live. Lender/buy-box data purchase planned (use-of-funds).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">5. AI + automation</h3>
            <p className="text-gray-700 text-sm">
              OM generation, deal matching. Evaluation approach and HITL/guardrails in place.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6. Engineering ops</h3>
            <p className="text-gray-500 text-sm">[NEEDED — CTO: repos overview, environments, uptime]</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">7. Roadmap (6–18 months)</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Platform MVP, first deals</li>
              <li>Data integration + customer acquisition</li>
              <li>Scale to 30+ customers</li>
              <li>50+ customers, market leadership</li>
            </ul>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="2.2 Platform Screenshots / Walkthrough">
        <p className="text-gray-500 text-sm">[Can be embedded as appendix or linked]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
