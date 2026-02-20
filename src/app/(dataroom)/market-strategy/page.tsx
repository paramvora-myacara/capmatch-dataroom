import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function MarketStrategyPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Market + Strategy Brief</h1>
      </header>
      
      <DocumentSection title="3.1 Market + Strategy Brief">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Market map</h3>
            <p className="text-gray-700 text-sm mb-3">
              Borrowers, brokers, lenders. The workflow is broken — email/PDF fragmentation, no standardization across 3,000+ lenders.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li><strong>$957B</strong> refinancing in 2025; market expanding to <strong>$6T</strong> by 2030</li>
              <li><strong>120,000</strong> licensed CRE brokers; most lack tools to place debt</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">ICP (Ideal Customer Profile)</h3>
            <p className="text-gray-700 text-sm">
              Borrower segments today: multifamily, OZ, development. Lender segments targeted: banks, funds, agencies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Competitive landscape + why CapMatch wins</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Competitors do lending OR software — we&apos;re the OS for both</li>
              <li>Outcomes-based + workflow + speed advantage</li>
              <li>First-mover; ~18 months ahead; winner-take-most dynamics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Go-to-market</h3>
            <p className="text-gray-700 text-sm">
              Broker activation + direct borrower acquisition. Refi Radar for proactive refinance timing. No cold start — founding team relationships.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Timing thesis (why now)</h3>
            <p className="text-gray-700 text-sm">
              $957B refi wave, COVID-era maturities, rates normalizing. Macro tailwinds align with platform launch.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Path to $10M Annual Revenue</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>25 loans/year at ~$400k revenue per loan (1% fee × 80% blend)</li>
              <li>1.91% of 1,307 commercial loans &gt;$50M (2024 HMDA)</li>
            </ul>
          </div>
        </div>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
