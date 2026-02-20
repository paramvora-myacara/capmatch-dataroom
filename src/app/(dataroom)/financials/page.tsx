import Link from 'next/link';
import { Download } from 'lucide-react';

export default function FinancialsPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Summary (2026–2028)</h1>
        <p className="text-gray-500 text-sm">CapMatch™ — The operating system for CRE debt</p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          This page provides a high-level, investor-ready overview of CapMatch&apos;s business model, market opportunity, and financial trajectory. A full 3-Year P&amp;L (Base Case: Conservative → Aggressive Growth) is available for download at the bottom of this page.
        </p>
      </header>

      {/* Contracted Revenue Callout */}
      <section className="mb-10 border border-blue-200 bg-blue-50/50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Contracted Pipeline</h2>
        <p className="text-gray-700 leading-relaxed">
          CapMatch currently has <strong>$291M in loan contracts</strong> across <strong>7 deals</strong> in processing. Assuming conversion at a 1% fee rate, this pipeline represents approximately <strong>$2.9M in revenue</strong> for the company — validating the unit economics before the platform has formally launched.
        </p>
      </section>

      {/* Market Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="py-2.5 text-gray-500 pr-6">Target Market</td><td className="py-2.5 font-medium text-gray-900">$1T+ CRE debt market</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Total Addressable Loans</td><td className="py-2.5 font-medium text-gray-900">1,307 per year (&gt;$50M deals) — Source: HMDA 2024</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Average Deal Size</td><td className="py-2.5 font-medium text-gray-900">$50M</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">CapMatch Fee Rate</td><td className="py-2.5 font-medium text-gray-900">1.0% (transaction-based commission)</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Net Revenue per Deal</td><td className="py-2.5 font-medium text-gray-900">$300K (after broker referral payout)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Revenue Trajectory */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trajectory</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Year</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Revenue</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Deals Closed</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Market Share</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">EBITDA Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3 font-medium">2026</td><td className="px-4 py-3 text-right">$5.0M</td><td className="px-4 py-3 text-right">10</td><td className="px-4 py-3 text-right">0.76%</td><td className="px-4 py-3 text-right">22.8%</td></tr>
              <tr><td className="px-4 py-3 font-medium">2027</td><td className="px-4 py-3 text-right">$10.0M</td><td className="px-4 py-3 text-right">20</td><td className="px-4 py-3 text-right">1.53%</td><td className="px-4 py-3 text-right">32.5%</td></tr>
              <tr><td className="px-4 py-3 font-medium">2028</td><td className="px-4 py-3 text-right">$18.5M</td><td className="px-4 py-3 text-right">36</td><td className="px-4 py-3 text-right">2.75%</td><td className="px-4 py-3 text-right">41.6%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          CapMatch achieves cashflow positivity by Month 7 of operations. EBITDA margins are conservative and may flex downward in later years to enable strategic reinvestment.
        </p>
      </section>

      {/* Customer Lifetime Value */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Lifetime Value</h2>
        <p className="text-gray-700 mb-4">Total LTV per Customer: <strong>$1.4M</strong></p>
        <div className="overflow-x-auto">
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
      </section>

      {/* Broker Network Expansion */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Broker Network Expansion</h2>
        <div className="overflow-x-auto">
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
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          Broker Payout (COGS): 40% of deal revenue (broker-originated deals only). As network effects grow and deals come directly to the platform, CapMatch retains more transaction fees.
        </p>
      </section>

      {/* Operating & Capital Efficiency */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Operating &amp; Capital Efficiency</h2>
        <div className="overflow-x-auto">
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
              <tr><td className="px-4 py-3">Gross Margin</td><td className="px-4 py-3 text-right">60.0%</td><td className="px-4 py-3 text-right">60.0%</td><td className="px-4 py-3 text-right">61.1%</td></tr>
              <tr><td className="px-4 py-3">Operating Margin</td><td className="px-4 py-3 text-right">22.8%</td><td className="px-4 py-3 text-right">32.5%</td><td className="px-4 py-3 text-right">41.6%</td></tr>
              <tr><td className="px-4 py-3">Burn Multiple</td><td className="px-4 py-3 text-right">1.63×</td><td className="px-4 py-3 text-right">0.84×</td><td className="px-4 py-3 text-right">0.47×</td></tr>
              <tr><td className="px-4 py-3">Cashflow Break-even</td><td className="px-4 py-3 text-right">Month 7</td><td className="px-4 py-3 text-right">—</td><td className="px-4 py-3 text-right">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3-Year P&L Statement */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">3-Year P&amp;L Statement</h2>
        <p className="text-gray-500 text-xs mb-4">All figures in $000s. Calendar year, accrual accounting. Base Case — Conservative to Aggressive Growth.</p>
        <div className="overflow-x-auto">
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
              {/* Revenue */}
              <tr className="bg-gray-50"><td className="px-4 py-2 font-semibold text-gray-900" colSpan={4}>Revenue</td></tr>
              <tr><td className="px-4 py-2 pl-6">Transaction Fee Revenue</td><td className="px-4 py-2 text-right">5,000</td><td className="px-4 py-2 text-right">10,000</td><td className="px-4 py-2 text-right">18,000</td></tr>
              <tr><td className="px-4 py-2 pl-6">Recurring / Other Revenue</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">500</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2 pl-6">Total Revenue</td><td className="px-4 py-2 text-right">5,000</td><td className="px-4 py-2 text-right">10,000</td><td className="px-4 py-2 text-right">18,500</td></tr>

              {/* COGS */}
              <tr className="bg-gray-50"><td className="px-4 py-2 font-semibold text-gray-900" colSpan={4}>Direct COGS</td></tr>
              <tr><td className="px-4 py-2 pl-6">Broker Referral Commissions (40%)</td><td className="px-4 py-2 text-right">(2,000)</td><td className="px-4 py-2 text-right">(4,000)</td><td className="px-4 py-2 text-right">(7,200)</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2 pl-6">Gross Profit</td><td className="px-4 py-2 text-right">3,000</td><td className="px-4 py-2 text-right">6,000</td><td className="px-4 py-2 text-right">11,300</td></tr>
              <tr><td className="px-4 py-2 pl-6 text-gray-500">Gross Margin %</td><td className="px-4 py-2 text-right text-gray-500">60.0%</td><td className="px-4 py-2 text-right text-gray-500">60.0%</td><td className="px-4 py-2 text-right text-gray-500">61.1%</td></tr>

              {/* OpEx */}
              <tr className="bg-gray-50"><td className="px-4 py-2 font-semibold text-gray-900" colSpan={4}>Operating Expenses</td></tr>
              <tr><td className="px-4 py-2 pl-6">Personnel (Staff &amp; Exec)</td><td className="px-4 py-2 text-right">540</td><td className="px-4 py-2 text-right">900</td><td className="px-4 py-2 text-right">1,200</td></tr>
              <tr><td className="px-4 py-2 pl-6">Engineering / Product</td><td className="px-4 py-2 text-right">600</td><td className="px-4 py-2 text-right">800</td><td className="px-4 py-2 text-right">1,000</td></tr>
              <tr><td className="px-4 py-2 pl-6">Data / SaaS / Operations</td><td className="px-4 py-2 text-right">240</td><td className="px-4 py-2 text-right">300</td><td className="px-4 py-2 text-right">350</td></tr>
              <tr><td className="px-4 py-2 pl-6">CAC / Marketing / Communications</td><td className="px-4 py-2 text-right">96</td><td className="px-4 py-2 text-right">192</td><td className="px-4 py-2 text-right">300</td></tr>
              <tr><td className="px-4 py-2 pl-6">Sales / Customer Success</td><td className="px-4 py-2 text-right">180</td><td className="px-4 py-2 text-right">300</td><td className="px-4 py-2 text-right">450</td></tr>
              <tr><td className="px-4 py-2 pl-6">Legal / Compliance</td><td className="px-4 py-2 text-right">144</td><td className="px-4 py-2 text-right">156</td><td className="px-4 py-2 text-right">168</td></tr>
              <tr><td className="px-4 py-2 pl-6">Contingency</td><td className="px-4 py-2 text-right">60</td><td className="px-4 py-2 text-right">100</td><td className="px-4 py-2 text-right">130</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2 pl-6">Total Operating Expenses</td><td className="px-4 py-2 text-right">1,860</td><td className="px-4 py-2 text-right">2,748</td><td className="px-4 py-2 text-right">3,598</td></tr>

              {/* EBITDA */}
              <tr className="bg-gray-50"><td className="px-4 py-2 font-semibold text-gray-900" colSpan={4}>Profitability</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2 pl-6">EBITDA</td><td className="px-4 py-2 text-right">1,140</td><td className="px-4 py-2 text-right">3,252</td><td className="px-4 py-2 text-right">7,702</td></tr>
              <tr><td className="px-4 py-2 pl-6 text-gray-500">EBITDA Margin %</td><td className="px-4 py-2 text-right text-gray-500">22.8%</td><td className="px-4 py-2 text-right text-gray-500">32.5%</td><td className="px-4 py-2 text-right text-gray-500">41.6%</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2 pl-6">Net Income (before tax)</td><td className="px-4 py-2 text-right">1,140</td><td className="px-4 py-2 text-right">3,252</td><td className="px-4 py-2 text-right">7,702</td></tr>
              <tr><td className="px-4 py-2 pl-6 text-gray-500">Net Margin %</td><td className="px-4 py-2 text-right text-gray-500">22.8%</td><td className="px-4 py-2 text-right text-gray-500">32.5%</td><td className="px-4 py-2 text-right text-gray-500">41.6%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          Reinvestment note: While the model shows EBITDA expansion, actual reported margins may be lower by design in later years if we reinvest to accelerate growth (product, data, GTM).
        </p>
      </section>

      {/* Cash Flow & Runway */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow &amp; Runway</h2>
        <div className="overflow-x-auto">
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
              <tr><td className="px-4 py-2">Pre-Cashflow Positive Burn</td><td className="px-4 py-2 text-right">(480)</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">—</td></tr>
              <tr><td className="px-4 py-2">Net Income</td><td className="px-4 py-2 text-right">1,140</td><td className="px-4 py-2 text-right">3,252</td><td className="px-4 py-2 text-right">7,702</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2">Ending Cash Balance</td><td className="px-4 py-2 text-right">4,160</td><td className="px-4 py-2 text-right">7,412</td><td className="px-4 py-2 text-right">15,114</td></tr>
              <tr><td className="px-4 py-2 text-gray-500">Capital Raised (cumulative)</td><td className="px-4 py-2 text-right text-gray-500">3,500</td><td className="px-4 py-2 text-right text-gray-500">3,500</td><td className="px-4 py-2 text-right text-gray-500">3,500</td></tr>
              <tr><td className="px-4 py-2 text-gray-500">Burn Multiple</td><td className="px-4 py-2 text-right text-gray-500">1.63×</td><td className="px-4 py-2 text-right text-gray-500">0.84×</td><td className="px-4 py-2 text-right text-gray-500">0.47×</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 text-sm text-gray-600 space-y-1.5">
          <li><strong>Month 7 Cashflow Positive</strong> — After an initial six-month burn of $480K, the company reaches cashflow positive operations in mid-2026.</li>
          <li><strong>No Additional Funding Required</strong> — $3.5M provides runway through Year 3 with $15.1M ending cash.</li>
          <li><strong>Improving Capital Efficiency</strong> — Burn multiple improves from 1.63× to 0.47×.</li>
        </ul>
      </section>

      {/* Key Financial Ratios */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Ratios</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Ratio</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2026</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2027</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">2028</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Gross Margin %</td><td className="px-4 py-2 text-right">60.0</td><td className="px-4 py-2 text-right">60.0</td><td className="px-4 py-2 text-right">61.1</td></tr>
              <tr><td className="px-4 py-2">OpEx as % of Revenue</td><td className="px-4 py-2 text-right">37.2</td><td className="px-4 py-2 text-right">27.5</td><td className="px-4 py-2 text-right">19.4</td></tr>
              <tr><td className="px-4 py-2">EBITDA Margin %</td><td className="px-4 py-2 text-right">22.8</td><td className="px-4 py-2 text-right">32.5</td><td className="px-4 py-2 text-right">41.6</td></tr>
              <tr><td className="px-4 py-2">Net Margin %</td><td className="px-4 py-2 text-right">22.8</td><td className="px-4 py-2 text-right">32.5</td><td className="px-4 py-2 text-right">41.6</td></tr>
              <tr><td className="px-4 py-2">YoY Revenue Growth %</td><td className="px-4 py-2 text-right">—</td><td className="px-4 py-2 text-right">100</td><td className="px-4 py-2 text-right">85</td></tr>
              <tr><td className="px-4 py-2">Revenue per Employee</td><td className="px-4 py-2 text-right">$714K</td><td className="px-4 py-2 text-right">$909K</td><td className="px-4 py-2 text-right">$1.233M</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Unit Economics &amp; Market Assumptions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="py-2.5 text-gray-500 pr-6">Average Deal Size</td><td className="py-2.5 font-medium text-gray-900">$50M loan volume</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Commission Rate</td><td className="py-2.5 font-medium text-gray-900">1.0% of loan volume</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Revenue per Deal</td><td className="py-2.5 font-medium text-gray-900">$500K (before 40% broker payout)</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Net Revenue per Deal</td><td className="py-2.5 font-medium text-gray-900">$300K (after COGS)</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Deals Required</td><td className="py-2.5 font-medium text-gray-900">10 (&apos;26) → 20 (&apos;27) → 36 (&apos;28)</td></tr>
              <tr><td className="py-2.5 text-gray-500 pr-6">Market Share</td><td className="py-2.5 font-medium text-gray-900">0.76% → 1.53% → 2.75% of 1,307 annual loans</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Funding Structure */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Funding Structure</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Round</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Terms</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Convertible Note</td><td className="px-4 py-2 text-right">$0.5M</td><td className="px-4 py-2">50% discount</td><td className="px-4 py-2 text-gray-500">Pre-launch + initial team</td></tr>
              <tr><td className="px-4 py-2">SAFE (Main Round)</td><td className="px-4 py-2 text-right">$3.0M (min target)</td><td className="px-4 py-2">Reduced discount</td><td className="px-4 py-2 text-gray-500">Product dev + market growth</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          CapMatch is targeting a minimum $3M SAFE raise, with final size adjusted based on company milestones, market learnings, and capital conditions in Q1 2026.
        </p>
      </section>

      {/* Use of Funds */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Use of Funds</h2>
        <div className="overflow-x-auto">
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
      </section>

      {/* Key Assumptions */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Assumptions &amp; Methodology</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Revenue Model</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Conservative growth starting Jan 2026 with 1 deal ($300K) → 10 deals by year-end ($5M).</li>
              <li>Year 2 doubles to 20 deals ($10M); Year 3 reaches 36 deals ($18M + $0.5M recurring).</li>
              <li>Revenue recognized at deal close (accrual basis).</li>
              <li>Excludes $900K additional LTV from insurance, refinancing, and servicing.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Cost Structure</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>COGS (40%) = Broker Referral Commissions.</li>
              <li>Personnel Scaling: 5 staff + 2 exec (2026) → 10 staff + 5 exec (2028).</li>
              <li>CAC &amp; Sales scale with growth; Legal and Data/SaaS remain stable.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Capital &amp; Cash Flow</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Starting capital $500K (convertible note 2025).</li>
              <li>Main SAFE ≥$3M (Q1 2026).</li>
              <li>Six-month pre-revenue burn ≈ $480K.</li>
              <li>No additional raises through 2028.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Performance Targets</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Breakeven → Month 7 (July 2026).</li>
              <li>EBITDA Margin → 41.6% by 2028.</li>
              <li>Gross Margin &gt; 60%.</li>
              <li>Market Penetration → ~2.75%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Linked Document</h2>
        <a
          href="/dataroom/3yr-pnl.xlsx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Full 3-Year Financial Model (P&amp;L 2026–2028)
        </a>
        <p className="text-gray-500 text-xs mt-3">Includes detailed financial statements, sensitivity scenarios, and assumptions.</p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <p className="text-xs text-gray-400 leading-relaxed">
          The financials presented are forward-looking, based on conservative assumptions as of November 2025. Actual results may differ due to market, regulatory, and execution factors. This overview is for informational purposes only and does not constitute an offer to sell or solicit investment.
        </p>
      </section>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
