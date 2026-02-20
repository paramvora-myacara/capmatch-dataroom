import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function TractionPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Traction Proof Pack</h1>
      </header>
      
      <DocumentSection title="4.1 Traction Summary">
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

      <DocumentSection
        title="4.2 Signed Contracts"
        documents={[
          { label: 'Deal contracts', href: '/dataroom/deal-contracts.pdf' },
          { label: 'Broker affiliate agreements', href: '/dataroom/broker-agreements.pdf' },
        ]}
      >
        <p className="text-gray-500 text-sm">
          [Add signed contracts to <code>public/dataroom/</code> — sanitize PII]
        </p>
      </DocumentSection>

      <DocumentSection title="4.3 Case Studies (3–5)">
        <p className="text-gray-700 text-sm mb-3">
          Template: Situation → CapMatch deliverable → Timeline → Result
        </p>
        <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
          <li>[NEEDED — Case study 1]</li>
          <li>[NEEDED — Case study 2]</li>
          <li>[NEEDED — Case study 3]</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="4.4 Sanitized Deliverables">
        <p className="text-gray-500 text-sm">[Show interactive package artifacts — what replaces static PDFs]</p>
      </DocumentSection>

      <DocumentSection title="4.5 Testimonials / References">
        <p className="text-gray-500 text-sm">[Optional short quotes, emails, permissioned intros]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
