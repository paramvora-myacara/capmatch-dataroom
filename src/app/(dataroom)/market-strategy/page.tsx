import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function MarketStrategyPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Market + Strategy Brief</h1>
      </header>
      
      <DocumentSection title="3.1 Market + Strategy Brief">
        <div className="space-y-10">

          {/* ── Market Map ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Market map</h3>
            <p className="text-gray-700 text-sm mb-4">
              Borrowers, brokers, lenders. The workflow is broken — email/PDF fragmentation, no standardization across 3,000+ lenders.
            </p>

            {/* Stat cards — neutral gray palette */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: '$957B', label: 'CRE refinancing in 2025' },
                { value: '$6T', label: 'Market size by 2030' },
                { value: '120K', label: 'Licensed CRE brokers' },
                { value: '3,000+', label: 'Lenders, no standard format' },
              ].map((s) => (
                <div key={s.value} className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── ICP ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">ICP (Ideal Customer Profile)</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Borrower Segments</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Multifamily', 'Opportunity Zone', 'Development'].map((s) => (
                    <span key={s} className="text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Lender Segments</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Banks', 'Debt Funds', 'Agencies'].map((s) => (
                    <span key={s} className="text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Competitive Landscape ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Competitive landscape</h3>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-2.5 text-left font-semibold text-gray-700 w-1/3"></th>
                    <th className="px-4 py-2.5 text-center font-semibold text-gray-500 w-1/3">Traditional Players</th>
                    <th className="px-4 py-2.5 text-center font-semibold text-gray-900 w-1/3 bg-gray-100">CapMatch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Approach', 'Lending OR Software', 'OS for both'],
                    ['Revenue model', 'SaaS seat license', 'Outcomes-based'],
                    ['Workflow', 'Fragmented / manual', 'End-to-end automated'],
                    ['Market timing', 'Established incumbents', '~18 months ahead'],
                    ['Dynamics', 'Commoditized tools', 'Winner-take-most'],
                  ].map(([dim, trad, cm]) => (
                    <tr key={dim}>
                      <td className="px-4 py-2.5 text-gray-600 font-medium">{dim}</td>
                      <td className="px-4 py-2.5 text-gray-500 text-center">{trad}</td>
                      <td className="px-4 py-2.5 text-gray-900 text-center font-medium bg-gray-50">{cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Go-to-market ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Go-to-market</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'Broker Activation', desc: 'Founding team relationships — no cold start. Affiliate partnerships for deal flow.' },
                { title: 'Direct Borrower', desc: 'Direct acquisition of borrowers through platform value — packaging + placement.' },
                { title: 'Refi Radar', desc: 'Proactive refinance timing alerts. Captures borrowers before they start searching.' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Timing Thesis ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Timing thesis (why now)</h3>
            <div className="border-l-3 border-gray-300 pl-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <strong>$957B</strong>&nbsp;refi wave — COVID-era maturities hitting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  Rates normalizing after cycle highs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  Macro tailwinds align with platform launch
                </li>
              </ul>
            </div>
          </div>

          {/* ── Path to $10M ── */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Path to $10M Annual Revenue</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Target</span>
                  <span className="text-lg font-bold text-gray-900">$10M ARR</span>
                </div>
              </div>
              <div className="px-4 py-4 space-y-3">
                {[
                  ['Loans per year', '25'],
                  ['Revenue per loan (1% fee × 80% blend)', '~$400K'],
                  ['Market share required', '1.91%'],
                  ['Addressable loans >$50M (2024 HMDA)', '1,307'],
                ].map(([label, val], i, arr) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-semibold text-gray-900">{val}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-full h-px bg-gray-100 mt-3" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
