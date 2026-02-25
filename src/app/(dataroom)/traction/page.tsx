import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

export default function TractionPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Traction Proof Pack</h1>
      </header>
      
      <DocumentSection title="Traction Summary">
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Metric</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2.5 text-gray-600">Loan volume</td><td className="px-4 py-2.5 font-medium text-gray-900">$291M</td></tr>
                <tr><td className="px-4 py-2.5 text-gray-600">Brokerages providing deal flow</td><td className="px-4 py-2.5 font-medium text-gray-900">4</td></tr>
                <tr><td className="px-4 py-2.5 text-gray-600">Projects in loan processing</td><td className="px-4 py-2.5 font-medium text-gray-900">7</td></tr>
                <tr><td className="px-4 py-2.5 text-gray-600">Implied revenue at conversion (1% fee)</td><td className="px-4 py-2.5 font-medium text-gray-900">~$2.9M</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">
            Definitions: pipeline = lead → qualified; contracted = signed; closed = wired.
          </p>
        </div>
      </DocumentSection>

      <DocumentSection title="Signed Contracts">
        <p className="text-gray-700 text-sm">
          Deal contracts signed by CapMatch for active deals and affiliate agreements signed with partner brokerages. Documents will be uploaded as they are finalized and PII-sanitized.
        </p>
      </DocumentSection>

      <DocumentSection title="Case Studies">
        <div className="space-y-6">
          {/* SoGood Apartments */}
          <div className="border border-gray-200 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">SoGood Apartments</h3>
                <p className="text-xs text-gray-500">Ground-Up Mixed-Use · Dallas, TX</p>
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap">$18M Construction</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              116-unit mixed-use with 49,569 SF commercial including a pre-leased Innovation Center. Seven unit types, affordable housing restrictions (80% AMI), Opportunity Zone benefits, and PFC tax exemption created layered underwriting complexity no single PDF could capture.
            </p>
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">CapMatch Impact: </span>
              Built a living underwriting model: reconciled conflicting assumptions across residential and commercial income, modeled Innovation Center lease escalations, and enabled lenders to toggle tax exemption scenarios in real time. Lender questions resolved during live calls instead of 24 to 48 hour turnaround.
            </div>
          </div>

          {/* 300 East LaSalle */}
          <div className="border border-gray-200 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">300 East LaSalle</h3>
                <p className="text-xs text-gray-500">Mixed-Use Multifamily Acquisition · South Bend, IN</p>
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap">$31.5M Senior Debt</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              144-unit Class A multifamily with 29,007 SF commercial. Conflicting data across BPO, Excel models, and trailing financials. Multi-year tax abatement required two distinct valuation methodologies: blended cap rate vs. NPV-adjusted.
            </p>
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">CapMatch Impact: </span>
              Ingested 20+ page BPO, multiple Excel models, and lease abstracts into a single reconciled dataset. Detected $135K+ variance between pro forma and actual rent roll. Generated lender-specific outputs (Fannie-format rent rolls, isolated commercial cash flows, cap rate sensitivity tables) from one source of truth.
            </div>
          </div>

          {/* The Marshall */}
          <div className="border border-gray-200 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">The Marshall</h3>
                <p className="text-xs text-gray-500">Student Housing Recap · Saint Louis University</p>
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap">$30.1M Equity</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              177-unit, 508-bed purpose-built student housing (99% complete, 60%+ pre-leased). Specialized underwriting: beds vs. units, academic calendar leases, enrollment-driven demand. Opportunity Zone structuring with capital deployment deadline.
            </p>
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">CapMatch Impact: </span>
              Built investor-ready intelligence layer: bed-level economics across 7 unit types, competitive supply analysis (only 162 PBSH beds built since 2017 for 15,200+ students), and dynamic OZ tax benefit modeling. Investor diligence questions resolved in live conversations instead of overnight turnaround.
            </div>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="Sanitized Deliverables">
        <div className="space-y-4">
          <p className="text-sm text-gray-700">
            The following is an OM (offering memorandum) generated for a live deal on our platform: SoGood Apartments, a ground-up mixed-use project in Dallas, TX. The deal has an $18 million loan value.
          </p>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50" style={{ minHeight: '70vh' }}>
            <video
              className="w-full"
              controls
              preload="metadata"
              autoPlay
              loop
              muted
            >
              <source src="/OMDeliverable.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="px-3 py-2 text-xs text-gray-500 bg-gray-50 border-t border-gray-100">
              Interactive OM  — sample of what we provide to commercial lenders.
            </p>
          </div>
        </div>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
