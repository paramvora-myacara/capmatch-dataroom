import SectionNav from '@/components/SectionNav';
import PageIndex from '@/components/PageIndex';

const FINANCIALS_INDEX = [
  { id: 'at-a-glance', label: 'At a Glance' },
  { id: 'opportunity', label: 'The Opportunity' },
  { id: 'early-traction', label: 'Early Traction' },
  { id: 'capital-deployed', label: 'Capital Deployed to Date' },
  { id: 'revenue-trajectory', label: 'Revenue Trajectory' },
  { id: 'evolving-cost', label: 'Evolving Cost Structure' },
  { id: 'unit-economics', label: 'Unit Economics' },
  { id: 'customer-ltv', label: 'Customer Lifetime Value' },
  { id: 'broker-network', label: 'Broker Network Expansion' },
  { id: 'pnl', label: '3-Year P&L Projection' },
  { id: 'operating-efficiency', label: 'Operating Efficiency' },
  { id: 'use-of-funds', label: 'Use of Funds (Post-Raise)' },
  { id: 'key-assumptions', label: 'Key Assumptions & Methodology' },
  { id: 'disclaimer', label: 'Disclaimer' },
];

export default function FinancialsPage() {
  return (
    <div className="flex gap-8">
      <PageIndex sections={FINANCIALS_INDEX} />
      <article className="flex-1 min-w-0">
      <header className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Financial Summary (2026–2028)</h1>
        <h2 className="text-lg font-medium text-gray-600 mb-6">CapMatch™: the operating system for CRE debt</h2>
        <hr className="border-gray-200 mb-8" />
      </header>

      {/* At a Glance */}
      <section id="at-a-glance" className="mb-16">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">At a Glance</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          CapMatch has built $291M in contracted loan pipeline across 7 active deals — on a total bootstrapped spend of $34K. No outside capital has been raised. Every dollar of traction to date has been earned, not bought.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This page provides an investor-ready overview of CapMatch&apos;s market opportunity, early traction, unit economics, and financial projections. All projections begin from 2026 and reflect a conservative base case. The actual opportunity is significantly larger.
        </p>
      </section>

      {/* The Opportunity */}
      <section id="opportunity" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">The Opportunity</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Commercial real estate debt placement is a $1 trillion+ market running on phone calls, spreadsheets, and personal relationships. There is no technology layer connecting borrowers to lenders at scale. Every deal is manually sourced, manually underwritten, and manually placed — creating massive inefficiency, information asymmetry, and wasted time on both sides of the transaction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          CapMatch is building the infrastructure layer for this market. The same way Uber connected riders and drivers in a fragmented transportation market, and Airbnb created a marketplace for fragmented housing inventory, CapMatch connects CRE borrowers, brokers, and lenders through AI-powered matchmaking — compressing deal timelines from 3–6 months down to under 30 days.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The market doesn&apos;t need incremental improvement. It needs a new operating system.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Metric</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2.5 text-gray-600">Target Market</td><td className="px-4 py-2.5 font-medium text-gray-900">$1T+ CRE debt market</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Total Addressable Loans</td><td className="px-4 py-2.5 font-medium text-gray-900">1,307 per year (&gt;$50M deals) — Source: HMDA 2024</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Average Deal Size</td><td className="px-4 py-2.5 font-medium text-gray-900">$50M</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">CapMatch Fee Rate</td><td className="px-4 py-2.5 font-medium text-gray-900">1.0% transaction commission</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Revenue per Deal</td><td className="px-4 py-2.5 font-medium text-gray-900">$500K</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          At just 2.75% market share — 36 deals per year — CapMatch generates $18.5M in annual revenue. This is a market where a small platform with the right technology can build an outsized business very quickly.
        </p>
      </section>

      {/* Early Traction */}
      <section id="early-traction" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Early Traction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CapMatch has not formally launched. Despite that, the platform has already attracted $291M in loan volume across 7 contracted deals in active processing. At a 1% fee rate, this pipeline represents approximately $2.9M in near-term revenue.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">To put this in context:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Metric</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2.5 text-gray-600">Contracted Pipeline</td><td className="px-4 py-2.5 font-medium text-gray-900">$291M across 7 deals</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Near-Term Revenue (at 1% fee)</td><td className="px-4 py-2.5 font-medium text-gray-900">~$2.9M</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Total Capital Deployed to Date</td><td className="px-4 py-2.5 font-medium text-gray-900">~$34K (bootstrapped)</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Pipeline Generated per $1 Spent</td><td className="px-4 py-2.5 font-medium text-gray-900">~$8,500</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Time to First Pipeline</td><td className="px-4 py-2.5 font-medium text-gray-900">&lt; 5 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          This is not a company that needs to prove product-market fit. The market is pulling the product forward. What CapMatch needs now is capital to scale what is already working — onboard more brokers, close the contracted pipeline faster, and capture a market that is ready for disruption.
        </p>
      </section>

      {/* Capital Deployed to Date */}
      <section id="capital-deployed" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Capital Deployed to Date</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CapMatch has been fully bootstrapped since inception. Founders have taken no salary and no outside capital has been raised. Total spend across 5 months of operations is approximately $34,220.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Period</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Team (Independent Contractors)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Software &amp; Infrastructure</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Monthly Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2.5">Month 1</td><td className="px-4 py-2.5">2 ICs × $2,000</td><td className="px-4 py-2.5">$80</td><td className="px-4 py-2.5 font-medium">$4,080</td></tr>
              <tr><td className="px-4 py-2.5">Month 2</td><td className="px-4 py-2.5">2 ICs × $2,000</td><td className="px-4 py-2.5">$100</td><td className="px-4 py-2.5 font-medium">$4,100</td></tr>
              <tr><td className="px-4 py-2.5">Month 3</td><td className="px-4 py-2.5">2 ICs × $3,000 + 1 IC × $2,000</td><td className="px-4 py-2.5">$140</td><td className="px-4 py-2.5 font-medium">$8,140</td></tr>
              <tr><td className="px-4 py-2.5">Month 4</td><td className="px-4 py-2.5">2 ICs × $3,000 + 1 IC × $2,000</td><td className="px-4 py-2.5">$400</td><td className="px-4 py-2.5 font-medium">$8,400</td></tr>
              <tr><td className="px-4 py-2.5">Month 5</td><td className="px-4 py-2.5">2 ICs × $3,000 + 1 IC × $2,000</td><td className="px-4 py-2.5">$400</td><td className="px-4 py-2.5 font-medium">$8,400</td></tr>
              <tr className="bg-gray-50 font-semibold"><td className="px-4 py-2.5">Total</td><td className="px-4 py-2.5">$33,100</td><td className="px-4 py-2.5">$1,120</td><td className="px-4 py-2.5">$34,220</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          What this demonstrates: CapMatch&apos;s founding team can build pipeline, close relationships, and ship product on virtually zero capital. The question is not whether this team can execute. The question is how fast this business scales with real resources behind it.
        </p>
      </section>

      {/* Revenue Trajectory */}
      <section id="revenue-trajectory" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Revenue Trajectory</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These projections represent a conservative base case. With 7 deals already contracted and deal velocity accelerating, actual performance may significantly exceed these figures.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Year</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Revenue</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Deals Closed</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Market Share</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Gross Margin</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">EBITDA Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3 font-medium">2026</td><td className="px-4 py-3 text-right">$5.0M</td><td className="px-4 py-3 text-right">10</td><td className="px-4 py-3 text-right">0.76%</td><td className="px-4 py-3 text-right">60.0%</td><td className="px-4 py-3 text-right">22.8%</td></tr>
              <tr><td className="px-4 py-3 font-medium">2027</td><td className="px-4 py-3 text-right">$10.0M</td><td className="px-4 py-3 text-right">20</td><td className="px-4 py-3 text-right">1.53%</td><td className="px-4 py-3 text-right">65.0%</td><td className="px-4 py-3 text-right">37.5%</td></tr>
              <tr><td className="px-4 py-3 font-medium">2028</td><td className="px-4 py-3 text-right">$18.5M</td><td className="px-4 py-3 text-right">36</td><td className="px-4 py-3 text-right">2.75%</td><td className="px-4 py-3 text-right">72.8%</td><td className="px-4 py-3 text-right">53.3%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Why these numbers are conservative:</strong> CapMatch already has 7 deals in processing and expects 20–30 deals by year-end based on current pipeline velocity. The model projects only 10 closed deals for 2026. At 2.75% market share by Year 3, CapMatch is barely scratching the surface of a 1,300+ deal annual market.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Where the growth comes from:</strong> CapMatch compresses deal timelines from months to weeks. Every deal that closes faster creates capacity for the next one. This is a compounding velocity advantage — the faster you close, the more you can close, and the more brokers and borrowers want to use the platform. Network effects accelerate from here.
        </p>
      </section>

      {/* Evolving Cost Structure */}
      <section id="evolving-cost" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Evolving Cost Structure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CapMatch&apos;s business model is designed to evolve. In Year 1, deals are primarily broker-originated at a 40% referral commission. As the platform builds direct borrower acquisition channels and brand recognition, broker dependency declines — structurally improving unit economics without requiring proportional cost increases.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3">Broker Referral Rate (COGS)</td><td className="px-4 py-3 text-right">40%</td><td className="px-4 py-3 text-right">35%</td><td className="px-4 py-3 text-right">28%</td></tr>
              <tr><td className="px-4 py-3">Gross Margin</td><td className="px-4 py-3 text-right">60.0%</td><td className="px-4 py-3 text-right">65.0%</td><td className="px-4 py-3 text-right">72.8%</td></tr>
              <tr><td className="px-4 py-3">Channel Mix</td><td className="px-4 py-3 text-right">Broker-led</td><td className="px-4 py-3 text-right">Mixed: broker + direct</td><td className="px-4 py-3 text-right">Platform-led</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          This is the flywheel: broker relationships drive initial deal flow → successful closings build platform reputation → borrowers come directly → margins expand → more capital available for growth. The model conservatively assumes this transition happens gradually. In practice, platform marketplaces often hit an inflection point where direct acquisition accelerates rapidly.
        </p>
      </section>

      {/* Unit Economics */}
      <section id="unit-economics" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Unit Economics</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Metric</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2.5 text-gray-600">Average Deal Size</td><td className="px-4 py-2.5 font-medium text-gray-900">$50M loan volume</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Commission Rate</td><td className="px-4 py-2.5 font-medium text-gray-900">1.0% of loan volume</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Revenue per Deal</td><td className="px-4 py-2.5 font-medium text-gray-900">$500K (before broker payout)</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Net Revenue per Deal (Year 1)</td><td className="px-4 py-2.5 font-medium text-gray-900">$300K (after 40% COGS)</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Net Revenue per Deal (Year 3)</td><td className="px-4 py-2.5 font-medium text-gray-900">$360K (after 28% COGS)</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Deals to $5M Revenue</td><td className="px-4 py-2.5 font-medium text-gray-900">10</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Deals to $18.5M Revenue</td><td className="px-4 py-2.5 font-medium text-gray-900">36</td></tr>
              <tr><td className="px-4 py-2.5 text-gray-600">Market Share at Year 3</td><td className="px-4 py-2.5 font-medium text-gray-900">2.75% of 1,307 annual loans</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          The beauty of this model: CapMatch doesn&apos;t need thousands of customers to build a large business. 36 deals a year at $500K each gets to $18.5M in revenue. This is a high-value, low-volume marketplace where each incremental deal has a material impact on the business.
        </p>
      </section>

      {/* Customer Lifetime Value */}
      <section id="customer-ltv" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Lifetime Value</h2>
        <p className="text-gray-700 font-semibold mb-4">Total LTV per Customer: $1.4M</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Component</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3">Initial Deal Commission</td><td className="px-4 py-3 text-right font-medium">$500K</td></tr>
              <tr><td className="px-4 py-3">Insurance &amp; Ancillary Commissions</td><td className="px-4 py-3 text-right font-medium">$150K</td></tr>
              <tr><td className="px-4 py-3">Refinance Opportunities</td><td className="px-4 py-3 text-right font-medium">$400K</td></tr>
              <tr><td className="px-4 py-3">Servicing &amp; Takeout Fees</td><td className="px-4 py-3 text-right font-medium">$350K</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          All revenue projections in this document are based solely on initial deal commissions ($500K per deal). The additional $900K per customer in insurance, refinancing, and servicing represents expansion revenue that is not included in the base case. This is deliberate. We prefer to show investors what we can confidently deliver, not what we hope to capture.
        </p>
      </section>

      {/* Broker Network Expansion */}
      <section id="broker-network" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Broker Network Expansion</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Metric</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3">Active Brokers Onboarded</td><td className="px-4 py-3 text-right font-medium">50</td><td className="px-4 py-3 text-right font-medium">125</td><td className="px-4 py-3 text-right font-medium">250</td></tr>
              <tr><td className="px-4 py-3">Broker Payout Rate (COGS)</td><td className="px-4 py-3 text-right">40%</td><td className="px-4 py-3 text-right">35%</td><td className="px-4 py-3 text-right">28%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Broker payouts apply only to broker-originated deals. As the network grows and more deals flow directly to the platform, CapMatch retains a larger share of each transaction. The broker network is the growth engine for Year 1; the platform becomes the growth engine from Year 2 onward.
        </p>
      </section>

      {/* 3-Year P&L Projection */}
      <section id="pnl" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">3-Year P&amp;L Projection</h2>
        <p className="text-gray-600 text-sm mb-6">All figures in $000s. Calendar year, accrual accounting. Base case: conservative to aggressive growth.</p>

        <h4 className="font-semibold text-gray-900 mb-2">Revenue</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Transaction Fee Revenue</td><td className="px-4 py-2 text-right">5,000</td><td className="px-4 py-2 text-right">10,000</td><td className="px-4 py-2 text-right">18,000</td></tr>
              <tr><td className="px-4 py-2">Recurring / Other Revenue</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">500</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">Total Revenue</td><td className="px-4 py-2 text-right">5,000</td><td className="px-4 py-2 text-right">10,000</td><td className="px-4 py-2 text-right">18,500</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-gray-900 mb-2">Cost of Revenue</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Broker Referral Commissions</td><td className="px-4 py-2 text-right">(2,000)</td><td className="px-4 py-2 text-right">(3,500)</td><td className="px-4 py-2 text-right">(5,040)</td></tr>
              <tr><td className="px-4 py-2 text-gray-500 italic">Broker Referral Rate</td><td className="px-4 py-2 text-right text-gray-500 italic">40%</td><td className="px-4 py-2 text-right text-gray-500 italic">35%</td><td className="px-4 py-2 text-right text-gray-500 italic">28%</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">Gross Profit</td><td className="px-4 py-2 text-right">3,000</td><td className="px-4 py-2 text-right">6,500</td><td className="px-4 py-2 text-right">13,460</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">Gross Margin</td><td className="px-4 py-2 text-right">60.0%</td><td className="px-4 py-2 text-right">65.0%</td><td className="px-4 py-2 text-right">72.8%</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-gray-900 mb-2">Operating Expenses</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Personnel (Staff &amp; Exec)</td><td className="px-4 py-2 text-right">540</td><td className="px-4 py-2 text-right">900</td><td className="px-4 py-2 text-right">1,200</td></tr>
              <tr><td className="px-4 py-2">Engineering / Product</td><td className="px-4 py-2 text-right">600</td><td className="px-4 py-2 text-right">800</td><td className="px-4 py-2 text-right">1,000</td></tr>
              <tr><td className="px-4 py-2">Data / SaaS / Operations</td><td className="px-4 py-2 text-right">240</td><td className="px-4 py-2 text-right">300</td><td className="px-4 py-2 text-right">350</td></tr>
              <tr><td className="px-4 py-2">CAC / Marketing / Communications</td><td className="px-4 py-2 text-right">96</td><td className="px-4 py-2 text-right">192</td><td className="px-4 py-2 text-right">300</td></tr>
              <tr><td className="px-4 py-2">Sales / Customer Success</td><td className="px-4 py-2 text-right">180</td><td className="px-4 py-2 text-right">300</td><td className="px-4 py-2 text-right">450</td></tr>
              <tr><td className="px-4 py-2">Legal / Compliance</td><td className="px-4 py-2 text-right">144</td><td className="px-4 py-2 text-right">156</td><td className="px-4 py-2 text-right">168</td></tr>
              <tr><td className="px-4 py-2">Contingency</td><td className="px-4 py-2 text-right">60</td><td className="px-4 py-2 text-right">100</td><td className="px-4 py-2 text-right">130</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">Total Operating Expenses</td><td className="px-4 py-2 text-right">1,860</td><td className="px-4 py-2 text-right">2,748</td><td className="px-4 py-2 text-right">3,598</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-gray-900 mb-2">Profitability</h4>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="font-semibold"><td className="px-4 py-2">EBITDA</td><td className="px-4 py-2 text-right">1,140</td><td className="px-4 py-2 text-right">3,752</td><td className="px-4 py-2 text-right">9,862</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">EBITDA Margin</td><td className="px-4 py-2 text-right">22.8%</td><td className="px-4 py-2 text-right">37.5%</td><td className="px-4 py-2 text-right">53.3%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm italic">
          Reinvestment note: While the model shows EBITDA expansion, we intend to prioritize reinvestment over near-term profitability when doing so accelerates durable growth. Actual reported margins may be lower by design as we invest aggressively into product, data infrastructure, and go-to-market.
        </p>
      </section>

      {/* Operating Efficiency */}
      <section id="operating-efficiency" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Operating Efficiency</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Metric</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3">Gross Margin</td><td className="px-4 py-3 text-right">60.0%</td><td className="px-4 py-3 text-right">65.0%</td><td className="px-4 py-3 text-right">72.8%</td></tr>
              <tr><td className="px-4 py-3">OpEx as % of Revenue</td><td className="px-4 py-3 text-right">37.2%</td><td className="px-4 py-3 text-right">27.5%</td><td className="px-4 py-3 text-right">19.4%</td></tr>
              <tr><td className="px-4 py-3">EBITDA Margin</td><td className="px-4 py-3 text-right">22.8%</td><td className="px-4 py-3 text-right">37.5%</td><td className="px-4 py-3 text-right">53.3%</td></tr>
              <tr><td className="px-4 py-3">YoY Revenue Growth</td><td className="px-4 py-3 text-right">—</td><td className="px-4 py-3 text-right">100%</td><td className="px-4 py-3 text-right">85%</td></tr>
              <tr><td className="px-4 py-3">Revenue per Employee</td><td className="px-4 py-3 text-right">$714K</td><td className="px-4 py-3 text-right">$909K</td><td className="px-4 py-3 text-right">$1.233M</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Founder salaries are fully deferred pre-funding. Select founders will begin drawing modest compensation after the company secures its first round, keeping early-stage costs tightly aligned with milestones.
        </p>
      </section>

      {/* Use of Funds (Post-Raise) */}
      <section id="use-of-funds" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Use of Funds (Post-Raise)</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Product &amp; Engineering</td><td className="px-4 py-2 text-right font-medium">38%</td></tr>
              <tr><td className="px-4 py-2">Sales &amp; Customer Success</td><td className="px-4 py-2 text-right font-medium">18%</td></tr>
              <tr><td className="px-4 py-2">Legal &amp; Compliance</td><td className="px-4 py-2 text-right font-medium">14%</td></tr>
              <tr><td className="px-4 py-2">Data / SaaS / Operations</td><td className="px-4 py-2 text-right font-medium">11%</td></tr>
              <tr><td className="px-4 py-2">Marketing / Communications</td><td className="px-4 py-2 text-right font-medium">8%</td></tr>
              <tr><td className="px-4 py-2">Contingency</td><td className="px-4 py-2 text-right font-medium">11%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Every dollar raised goes directly into scaling what is already working: closing the contracted pipeline faster, onboarding more brokers, building direct acquisition channels, and hardening the technology platform. There is no spend allocated to &quot;figuring out product-market fit.&quot; That work is already done.
        </p>
      </section>

      {/* Key Assumptions & Methodology */}
      <section id="key-assumptions" className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Assumptions &amp; Methodology</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p className="leading-relaxed">
            <strong>Revenue Model.</strong> Conservative growth starting Q1 2026 with 1 deal ($300K net), scaling to 10 deals by year-end ($5M). Year 2 doubles to 20 deals ($10M). Year 3 reaches 36 deals ($18M + $0.5M recurring). Revenue recognized at deal close on an accrual basis. Projections exclude $900K in additional LTV per customer from insurance, refinancing, and servicing.
          </p>
          <p className="leading-relaxed">
            <strong>Cost Structure.</strong> COGS represents broker referral commissions, declining from 40% to 28% over three years as the platform shifts toward direct-to-borrower acquisition. Personnel scaling: 5 staff + 2 executives in 2026, growing to 10 staff + 5 executives by 2028. All founder compensation deferred until first funding round closes. CAC and sales expenses scale with deal volume; legal and infrastructure costs remain stable.
          </p>
          <p className="leading-relaxed">
            <strong>Performance Targets.</strong> EBITDA positive within first year of funded operations. Gross margin exceeding 60% in all years, reaching 72.8% by Year 3. Market penetration of approximately 2.75% — leaving over 97% of the addressable market untouched.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className="mb-16">
        <p className="text-xs text-gray-500 leading-relaxed italic">
          The forward-looking statements, financial projections, and illustrative scenarios contained herein are based on current management assumptions, estimates, and expectations as of February 2026. These assumptions are believed to be reasonable and conservative; however, they are inherently subject to known and unknown risks, uncertainties, and variables — including general economic conditions, interest-rate environments, market dynamics, competitive pressures, regulatory developments, and execution-related risks — which may cause actual results to differ materially from those expressed or implied. This material is provided for informational and discussion purposes and should not be construed as an offer to sell or solicitation of an offer to buy any securities or investment products.
        </p>
      </section>

      <SectionNav />
    </article>
    </div>
  );
}
