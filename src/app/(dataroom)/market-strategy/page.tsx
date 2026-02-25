import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';
import CompetitiveAnalysisGraph from '@/components/CompetitiveAnalysisGraph';
import PageIndex from '@/components/PageIndex';

const MARKET_STRATEGY_INDEX = [
  { id: 'market-map', label: 'Market map' },
  { id: 'icp', label: 'ICP' },
  { id: 'competitive', label: 'Competitive landscape' },
  { id: 'gtm', label: 'Go-to-market' },
  { id: 'refi-radar', label: 'Refi Radar' },
  { id: 'timing', label: 'Timing thesis' },
];

export default function MarketStrategyPage() {
  return (
    <div className="flex gap-8">
      <PageIndex sections={MARKET_STRATEGY_INDEX} />
      <article className="flex-1 min-w-0">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Market + Strategy Brief</h1>
      </header>
      
      <DocumentSection title="Market + Strategy Brief">
        <div className="space-y-10">

          {/* Market Map */}
          <div id="market-map">
            <h3 className="font-semibold text-gray-900 mb-4">Market map</h3>
            <p className="text-gray-700 text-sm mb-4">
              CRE capital flows among borrowers, brokers, and 3,000+ lenders with no shared data standard. Deals move on email and PDFs, every placement is manually reassembled, and fragmentation slows execution. CapMatch unifies intake, packaging, and placement so borrowers build a profile once and lenders receive standardized, queryable deal packages in a $957B refi wave and $6T market by 2030.
            </p>

            {/* Stat cards: neutral gray palette */}
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

          {/* ICP */}
          <div id="icp">
            <h3 className="font-semibold text-gray-900 mb-3">ICP (Ideal Customer Profile)</h3>
            <p className="text-gray-700 text-sm mb-4">
              We focus on borrowers and lenders where our platform delivers the clearest value: multifamily, Opportunity Zone, and development debt; banks, debt funds, and agencies as lender segments; and both ground-up and refinance deal types. This ICP aligns with our team&apos;s experience and the refi wave driving near-term volume.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Borrower segments</p>
                <div className="flex flex-col gap-1.5">
                  {['Multifamily', 'Opportunity Zone', 'Development'].map((s) => (
                    <span key={s} className="text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1.5 rounded-full w-fit">{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Lender segments</p>
                <div className="flex flex-col gap-1.5">
                  {['Banks', 'Debt Funds', 'Agencies'].map((s) => (
                    <span key={s} className="text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1.5 rounded-full w-fit">{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deal type</p>
                <div className="flex flex-col gap-1.5">
                  {['Ground up', 'Refinance'].map((s) => (
                    <span key={s} className="text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1.5 rounded-full w-fit">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Landscape */}
          <div id="competitive">
            <h3 className="font-semibold text-gray-900 mb-3">Competitive landscape</h3>
            <div className="mb-6">
              <CompetitiveAnalysisGraph />
            </div>
            <p className="text-[15px] text-gray-700 mb-6">
              CapMatch occupies the high-automation, high-integration quadrant — building the end-to-end operating system for CRE capital markets that traditional lenders and point-solution vendors have not addressed.
            </p>
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

          {/* Go-to-market */}
          <div id="gtm">
            <h3 className="font-semibold text-gray-900 mb-3">Go-to-market</h3>
            <p className="text-gray-700 text-sm mb-4">
              We activate demand through two core channels: broker-led deal flow and direct borrower acquisition. Each reinforces the other and drives volume onto the platform.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              We have already onboarded four brokerages without spending a dollar on go-to-market. That is early validation that our value proposition and channel strategy resonate before we scale paid acquisition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Broker Activation', desc: 'The founding team brings deep CRE and capital markets relationships, so we do not start from zero. We sign affiliate and referral partnerships with brokers who want better packaging and placement for their borrowers. Brokers keep their economics while gaining workflow automation and access to a broader lender set, which in turn brings more deal flow onto CapMatch.' },
                { title: 'Direct Borrower', desc: 'We acquire borrowers directly by offering clear platform value: one profile, one package, and placement across many lenders without re-keying or re-formatting. Borrowers get faster execution and transparency; we earn outcomes-based revenue when deals close. Direct acquisition also builds brand and pulls in brokers who see the results.' },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-2">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Refi Radar */}
          <div id="refi-radar">
            <h3 className="font-semibold text-gray-900 mb-3">Refi Radar</h3>
            <p className="text-gray-700 text-sm mb-4">
              Refi Radar uses market and rate data to identify when a refinance is likely to be favorable for a given property or sponsor. We surface proactive refinance timing alerts so we can reach borrowers before they start searching. That positions CapMatch as the natural first stop when the refi wave and maturities drive demand.
            </p>
            <div className="w-full">
              <div className="w-full rounded-lg overflow-hidden border border-gray-200" style={{ height: '70vh' }}>
                <iframe
                  src="https://www.capmatch.com/refi-radar"
                  title="CapMatch Refi Radar"
                  className="w-full h-full border-0"
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>

          {/* Timing Thesis */}
          <div id="timing">
            <h3 className="font-semibold text-gray-900 mb-3">Timing thesis (why now)</h3>
            <p className="text-gray-700 text-sm mb-4">
              Market timing favors a platform that can capture refi volume and standardize placement. Three factors make now the right moment to scale.
            </p>
            <div className="border-l-3 border-gray-300 pl-4 space-y-4">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <strong>$957B refi wave.</strong> COVID-era originations are maturing in a large wave. Borrowers and brokers are actively looking for refinancing options, which creates a natural pipeline for a platform that can package and place deals efficiently.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <strong>Rates normalizing after cycle highs.</strong> As rate volatility settles, borrowers and lenders can plan with more certainty. A unified platform that reduces friction and time-to-close is well positioned when volume is high and execution speed matters.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <strong>Macro tailwinds align with platform launch.</strong> The combination of maturities, normalization, and lender appetite for quality CRE creates a window where an operating system for capital markets can gain share before incumbents close the gap.
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Sources:{' '}
              <a href="https://www.spglobal.com/market-intelligence/en/news-insights/research/cre-maturity-wall-reaches-950b-in-2024-peaks-in-2027" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">S&P Global Market Intelligence</a>
              {' · '}
              <a href="https://www.jpmorgan.com/insights/real-estate/commercial-real-estate/commercial-real-estate-trends" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">J.P. Morgan</a>
            </p>
          </div>

        </div>
      </DocumentSection>

      <SectionNav />
    </article>
    </div>
  );
}
