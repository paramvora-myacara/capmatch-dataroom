import DocumentSection from '@/components/DocumentSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import SectionNav from '@/components/SectionNav';

export default function ProductTechPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Product + Tech Overview</h1>
        <p className="text-gray-600 text-sm mt-2">
          The platform is built from three core repositories: Frontend, Backend, and ETL Pipeline.
        </p>
      </header>
      
      <DocumentSection title="Product + Tech Overview (Single Umbrella Doc)">
        <div className="space-y-10">

          {/* 1. Product workflow pipeline */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Product today: end-to-end workflow</h3>
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

          {/* 2. Roles */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Workflow &amp; roles</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { role: 'Borrower', desc: 'Build profile once; reuse across every deal and lender' },
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

          {/* 3. Architecture */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Architecture (high level)</h3>
            <p className="text-gray-700 text-sm mb-4">
              Three core repositories: a Next.js frontend (App Router, SSR/SSG), a FastAPI backend (Python 3.11), and a Prefect-based ETL pipeline. The frontend and backend use Supabase as BaaS (PostgreSQL, Auth, Storage). Data flows through the ETL pipeline into a PostGIS-enabled data warehouse and data lake. AI is powered by a LiteLLM proxy routing to Gemini and Mistral, with RAG via LightRAG (Neo4j knowledge graph and PGVector).
            </p>
            <ArchitectureDiagram />
          </div>

          {/* 4. Data Sources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Data sources &amp; provenance</h3>
            <p className="text-gray-700 text-sm mb-3">
              Automated ingestion from 20+ federal, market, and environmental data APIs via Prefect ETL flows (ingest, transform, mart). All data is stored in a PostGIS-enabled PostgreSQL warehouse with full provenance tracking. Every record is georeferenced and queryable by census tract, county, and MSA.
            </p>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100">
                {[
                  { name: 'Census Bureau', desc: 'Demographics, housing, income by geography' },
                  { name: 'BLS', desc: 'Employment, wages, CPI for submarket analysis' },
                  { name: 'HUD', desc: 'Fair Market Rents, income limits, affordability' },
                  { name: 'FEMA', desc: 'Flood zone and disaster risk overlays' },
                  { name: 'EPA', desc: 'Environmental risk and brownfield data' },
                  { name: 'FRED', desc: 'Interest rates, economic indicators' },
                  { name: 'Redfin', desc: 'Comparable sales and market trends' },
                  { name: 'NHGIS', desc: 'Historical census microdata and time series' },
                  { name: 'FHFA', desc: 'House Price Index by metro and state' },
                  { name: 'CDFI', desc: 'Community development financial institutions' },
                  { name: 'RentCafe', desc: 'Rental market data and apartment listings' },
                  { name: 'Eviction Lab', desc: 'Eviction rates and housing instability' },
                  { name: 'USFWS', desc: 'Wetlands and environmental constraints' },
                  { name: 'USGS', desc: 'Geological and topographic data' },
                  { name: 'NPS', desc: 'National Park Service proximity data' },
                  { name: 'GoodJobsFirst', desc: 'Subsidies, incentives, tax abatements' },
                  { name: 'CoStar', desc: 'Commercial property analytics and comps' },
                  { name: 'Yardi Matrix', desc: 'Multifamily market intelligence and rents' },
                  { name: 'Capitalize', desc: 'CRE loan and capital markets data' },
                  { name: 'LightBox', desc: 'Parcel-level property and ownership data' },
                ].map((s) => (
                  <div key={s.name} className="bg-white p-3">
                    <p className="text-xs font-semibold text-gray-900 mb-0.5">{s.name}</p>
                    <p className="text-[11px] text-gray-500 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. AI + automation (expanded) */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900">AI + Automation</h3>
              <p className="text-gray-500 text-xs mt-0.5">
                AI and automation are embedded throughout the CapMatch stack. Every stage of the deal lifecycle, from document intake to package generation, is augmented by purpose-built AI services.
              </p>
            </div>

            <div className="p-5">
              {/* 2x2 grid for the four core AI services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* LLM Gateway */}
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">LLM Gateway</h4>
                  <p className="text-[11px] text-gray-500 font-medium mb-2">LiteLLM Proxy: multi-model routing and load balancing</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    All LLM calls route through a self-hosted LiteLLM proxy that load-balances across Gemini and Mistral models using 13+ API keys. The gateway provides per-model usage tracking, automatic fallback between providers, and centralized rate-limit management. This architecture keeps the application layer model-agnostic; switching or adding providers requires zero code changes.
                  </p>
                </div>

                {/* Document Intelligence */}
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Document Intelligence Pipeline</h4>
                  <p className="text-[11px] text-gray-500 font-medium mb-2">OCR, LLM extraction, dynamic schema discovery, and sanity checking</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Uploaded documents go through a multi-engine OCR pipeline that handles PDFs, images, and scanned files. The system then classifies each document for relevance to specific deal subsections and performs LLM-powered field extraction with dynamic schema discovery, meaning it adapts to whatever fields appear in the document rather than relying on rigid templates. Extracted data passes through 150+ backward sanity rules that cross-check values (e.g., verifying that reported NOI matches the sum of income minus expenses), field-type constraints, and confidence-scored conflict resolution when multiple documents provide conflicting values. Source metadata is preserved so every extracted field traces back to its origin document and page.
                  </p>
                </div>

                {/* Information Extractor */}
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Information Extractor</h4>
                  <p className="text-[11px] text-gray-500 font-medium mb-2">LightRAG with Neo4j knowledge graph and PGVector embeddings</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Each project gets its own &quot;deal brain&quot;: a per-project knowledge graph built from all uploaded documents. Documents are chunked, embedded via PGVector, and linked in a Neo4j knowledge graph that captures entity relationships (properties, sponsors, lenders, financial metrics). Users and internal services can then ask natural-language questions about any deal and get answers grounded in the actual deal documents, with source citations.
                  </p>
                </div>

                {/* OM / Deal Package Generation */}
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Deal Package Generation</h4>
                  <p className="text-[11px] text-gray-500 font-medium mb-2">Automated OM sections, financial tables, and narrative content</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    CapMatch generates Offering Memoranda and deal packages through a modular generator system. Individual generators produce rent rolls, T12 financials, pro forma projections, sponsor bios, sources and uses tables, capital expenditure schedules, SREO summaries, and personal financial statements. An orchestrator coordinates these generators, routing extracted data through financial calculations and LLM-driven narrative generation to produce complete, lender-ready outputs. Each section is dynamically filled based on the actual deal data, not static templates.
                  </p>
                </div>
              </div>

              {/* Guardrails — full-width */}
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Guardrails &amp; Quality Assurance</h4>
                <p className="text-[11px] text-gray-500 font-medium mb-2">Human-in-the-loop review, sanity checks, and source tracing</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every AI-generated output goes through quality gates before reaching a user. Backward sanity checks compare extracted financial values against computed totals and flag discrepancies. Confidence scores from extraction inform conflict resolution when multiple documents disagree. Field constraints enforce data-type and range validation. Users can review, edit, and override any AI-generated value, and all changes are tracked with version history. Source metadata traces every value back to its origin document.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Engineering Ops */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Engineering Ops</h3>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {[
                { title: 'Repositories', items: ['Frontend: Next.js 15 / TypeScript (App Router, Vercel)', 'Backend: FastAPI / Python 3.11 (Docker, GCP Cloud Run)', 'ETL Pipeline: Prefect / Python (lake, warehouse, marts)'] },
                { title: 'Infrastructure', items: ['Supabase (PostgreSQL, Auth, Storage)', 'Neo4j (knowledge graph for RAG)', 'Redis (rate limit, cache)', 'Prefect server + worker (GCP)', 'GCP Cloud Run (backend deployment)'] },
                { title: 'Deployment & CI', items: ['GCP Cloud Run (Backend via Docker)', 'Vercel (Frontend)', 'GCP (Prefect workers, infrastructure)', 'GitHub Actions CI/CD', 'LiteLLM usage monitoring'] },
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

        </div>
      </DocumentSection>

      <DocumentSection title="Platform Screenshots / Walkthrough">
        <HowItWorksSection />
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
