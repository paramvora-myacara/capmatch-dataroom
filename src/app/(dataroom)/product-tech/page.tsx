import DocumentSection from '@/components/DocumentSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import Link from 'next/link';

export default function ProductTechPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Product + Tech Overview</h1>
      </header>
      
      <DocumentSection title="Product + Tech Overview (Single Umbrella Doc)">
        <div className="space-y-10">

          {/* Built vs In Progress */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Built vs In Progress</h3>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { title: 'Built now', items: ['Packaging/workflows', 'Core platform', 'Current data ingestion', 'Automation, evaluation approach'] },
                { title: 'In progress', items: ['Lender matching module'] },
                { title: 'Planned next', items: ['Purchase + integration of lender/buy-box data', 'Productionize matching'] },
              ].map((col) => (
                <div key={col.title} className="p-4">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">{col.title}</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {col.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 1 — Product workflow pipeline */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Product today — end-to-end workflow</h3>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-stretch gap-0">
                {[
                  { step: 'Borrower Intake', desc: 'Profile + docs uploaded once' },
                  { step: 'AI Packaging', desc: '30-second OMs with live updates' },
                  { step: 'Lender Outreach', desc: 'AI-assisted matching (in build)' },
                  { step: 'Close', desc: 'One platform to wire transfer' },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-stretch flex-1">
                    <div className="flex-1 text-center px-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-2">
                        <span className="w-2 h-2 rounded-full bg-gray-400" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900 mb-0.5">{s.step}</p>
                      <p className="text-[11px] text-gray-500 leading-snug">{s.desc}</p>
                    </div>
                    {i < 3 && (
                      <div className="flex items-center px-1 text-gray-300 self-start mt-3">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 — Roles */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Workflow &amp; roles</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { role: 'Borrower', desc: 'Build profile once — reuse across every deal and lender' },
                { role: 'Advisor / Broker', desc: 'Manage unlimited deals with workflow automation' },
                { role: 'Lender', desc: 'Receive standardized, queryable deal packages' },
              ].map((r) => (
                <div key={r.role} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">{r.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 — Architecture */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Architecture (high level)</h3>
            <p className="text-gray-700 text-sm mb-4">
              Three-repo monorepo: Next.js frontend (App Router, SSR/SSG), FastAPI backend (Python 3.11), and Supabase BaaS.
              Data flows through a Prefect ETL pipeline into a PostGIS-enabled data warehouse. AI capabilities powered by a
              LiteLLM proxy routing to Gemini and Mistral models, with RAG via Neo4j knowledge graphs and PGVector.
            </p>
            <ArchitectureDiagram />
          </div>

          {/* 4 — Data Sources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Data sources &amp; provenance</h3>
            <p className="text-gray-700 text-sm mb-3">
              Automated ingestion from 7+ federal and market data APIs via Prefect ETL flows (ingest → transform → mart). All data stored in a PostGIS-enabled PostgreSQL warehouse with full provenance tracking.
            </p>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100">
                {[
                  { name: 'Census Bureau', desc: 'Demographics, housing, income by geography' },
                  { name: 'BLS', desc: 'Employment, wage, CPI for submarket analysis' },
                  { name: 'HUD', desc: 'Fair Market Rents, income limits, affordability' },
                  { name: 'FEMA', desc: 'Flood zone and disaster risk overlays' },
                  { name: 'EPA', desc: 'Environmental risk and brownfield data' },
                  { name: 'FRED', desc: 'Interest rates, economic indicators' },
                  { name: 'Redfin', desc: 'Comparable sales and market trends' },
                  { name: 'Data Lake', desc: 'Raw API responses preserved in Supabase storage' },
                ].map((s) => (
                  <div key={s.name} className="bg-white p-3">
                    <p className="text-xs font-semibold text-gray-900 mb-0.5">{s.name}</p>
                    <p className="text-[11px] text-gray-500 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 — AI + Automation — stacked list */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">AI + automation</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
              {[
                { title: 'LLM Gateway', desc: 'LiteLLM proxy — load balancing across Gemini + Mistral, per-model usage tracking, automatic fallback' },
                { title: 'Document Intelligence', desc: 'OCR (multi-engine) → LLM field extraction → 150+ sanity rules → structured deal data' },
                { title: 'RAG / Deal Brain', desc: 'Neo4j knowledge graph + PGVector embeddings — per-project "deal brain" for natural-language Q&A' },
                { title: 'OM Generation', desc: 'Automated offering memoranda with section templates, financial calculations, and narrative generation' },
                { title: 'Guardrails', desc: 'Human-in-the-loop review, backward sanity checks, field constraints, source metadata tracing' },
              ].map((c) => (
                <div key={c.title} className="px-4 py-3">
                  <p className="text-xs font-semibold text-gray-900">{c.title}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 — Engineering Ops */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Engineering Ops</h3>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {[
                { title: 'Repositories', items: ['Frontend — Next.js 15 / TS', 'Backend — FastAPI / Python 3.11', 'Dataroom — Next.js'] },
                { title: 'Infrastructure', items: ['Supabase (PG + Auth + Storage)', 'GCP Cloud Functions', 'Redis (rate limit + cache)'] },
                { title: 'Deployment & CI', items: ['Docker + Vercel + GCP', 'GitHub Actions CI/CD', 'LiteLLM usage monitoring'] },
              ].map((col) => (
                <div key={col.title} className="p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{col.title}</p>
                  <ul className="text-gray-700 text-xs space-y-1.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 7 — Roadmap */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Roadmap (6–18 months)</h3>
            <div className="flex gap-3">
              {[
                { phase: 'Now', label: 'Platform MVP, first deals' },
                { phase: '6 mo', label: 'Data integration + customer acquisition' },
                { phase: '12 mo', label: 'Scale to 30+ customers' },
                { phase: '18 mo', label: '50+ customers, market leadership' },
              ].map((step, i) => (
                <div key={step.phase} className="flex-1 relative">
                  <div className="border border-gray-200 rounded-lg p-3 text-center">
                    <p className="text-xs font-semibold text-gray-900 mb-1">{step.phase}</p>
                    <p className="text-xs text-gray-600 leading-snug">{step.label}</p>
                  </div>
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-gray-300 text-xs z-10">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </DocumentSection>

      <DocumentSection title="Platform Screenshots / Walkthrough">
        <HowItWorksSection />
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
