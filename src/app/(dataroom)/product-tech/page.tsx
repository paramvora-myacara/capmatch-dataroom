'use client';

import { useEffect } from 'react';
import DocumentSection from '@/components/DocumentSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import SectionNav from '@/components/SectionNav';
import PageIndex from '@/components/PageIndex';

const PRODUCT_TECH_INDEX = [
  { id: 'workflow', label: 'Product workflow' },
  { id: 'roles', label: 'Workflow & roles' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'data-sources', label: 'Data sources' },
  { id: 'ai-automation', label: 'AI + Automation' },
  { id: 'engineering-ops', label: 'Engineering Ops' },
  { id: 'screenshots', label: 'Platform screenshots' },
];

export default function ProductTechPage() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const delays = [0, 50, 150, 400];
    const timers = delays.map((ms) =>
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex gap-8">
      <PageIndex sections={PRODUCT_TECH_INDEX} />
      <article className="flex-1 min-w-0">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Product + Tech Overview</h1>
        <p className="text-gray-600 text-sm mt-2">
          The platform is built from three core repositories: Frontend, Backend, and ETL Pipeline.
        </p>
      </header>
      
      <DocumentSection title="Product + Tech Overview">
        <div className="space-y-10">

          {/* 1. Product workflow pipeline */}
          <div id="workflow">
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
          <div id="roles">
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
          <div id="architecture">
            <h3 className="font-semibold text-gray-900 mb-2">Architecture (high level)</h3>
            <ArchitectureDiagram />
          </div>

          {/* 4. Data Sources */}
          <div id="data-sources">
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

        </div>
      </DocumentSection>

      <DocumentSection title="AI + Automation">
        <div id="ai-automation" className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <p className="text-gray-500 text-xs">
              AI is embedded throughout the CapMatch stack, augmenting every stage from document intake to deal package generation.
            </p>
          </div>

          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">LLM Gateway</h4>
                <p className="text-[11px] text-gray-500 font-medium mb-2">LiteLLM Proxy: multi-model routing and load balancing</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All LLM calls route through a self-hosted LiteLLM proxy that load-balances across Gemini and Mistral using 13+ API keys, with per-model usage tracking, automatic fallback, and centralized rate-limit management.
                </p>
              </div>

              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Document Intelligence Pipeline</h4>
                <p className="text-[11px] text-gray-500 font-medium mb-2">OCR, LLM extraction, dynamic schema discovery, and sanity checking</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Multi-engine OCR handles PDFs, images, and scans. LLM-powered field extraction with dynamic schema discovery adapts to whatever fields appear. 150+ backward sanity rules cross-check values, with source metadata preserved for every extracted field.
                </p>
              </div>

              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Information Extractor</h4>
                <p className="text-[11px] text-gray-500 font-medium mb-2">LightRAG with Neo4j knowledge graph and PGVector embeddings</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Each project gets a per-project knowledge graph built from uploaded documents. Documents are chunked, embedded via PGVector, and linked in Neo4j. Users can ask natural-language questions and get answers grounded in deal documents with source citations.
                </p>
              </div>

              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Deal Package Generation</h4>
                <p className="text-[11px] text-gray-500 font-medium mb-2">Automated OM sections, financial tables, and narrative content</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Modular generators produce rent rolls, T12 financials, pro forma projections, sponsor bios, sources and uses, and more. An orchestrator coordinates extraction, financial calculations, and LLM-driven narrative generation into complete, lender-ready outputs.
                </p>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Guardrails &amp; Quality Assurance</h4>
              <p className="text-[11px] text-gray-500 font-medium mb-2">Human-in-the-loop review, sanity checks, and source tracing</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every AI output goes through quality gates: backward sanity checks, confidence-scored conflict resolution, field constraints, and user-editable overrides with version history. Source metadata traces every value to its origin document.
              </p>
            </div>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="Engineering Ops">
        <div id="engineering-ops" className="border border-gray-200 rounded-lg overflow-hidden">
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
      </DocumentSection>

      <DocumentSection title="Platform Screenshots / Walkthrough">
        <div id="screenshots" className="w-full">
          <HowItWorksSection />
        </div>
      </DocumentSection>

      <SectionNav />
    </article>
    </div>
  );
}
