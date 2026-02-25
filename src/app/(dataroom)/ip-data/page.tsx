import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

export default function IpDataPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">IP + Data Rights</h1>
      </header>
      
      <DocumentSection title="IP Ownership">
        <p className="text-gray-700 text-sm">
          All intellectual property, including source code, algorithms, models, and data pipelines, is owned by CapMatch, Inc. Standard IP assignment agreements are in place for all employees and contractors.
        </p>
      </DocumentSection>

      <DocumentSection title="Open-Source Audit &amp; License Inventory">
        <p className="text-gray-700 text-sm mb-4">
          CapMatch is transparent about its use of open source software. Below is an audit of major dependencies across the three core repositories (Frontend, Backend, ETL Pipeline), with package name, purpose, and license. This is a snapshot of the principal packages; full dependency trees can be generated via <code className="text-gray-600 bg-gray-100 px-1 rounded">npm</code> (e.g. <code className="text-gray-600 bg-gray-100 px-1 rounded">npx license-checker</code>) and <code className="text-gray-600 bg-gray-100 px-1 rounded">pip</code> (e.g. <code className="text-gray-600 bg-gray-100 px-1 rounded">pip-licenses</code>) for compliance reviews.
        </p>

        {/* Frontend */}
        <h4 className="font-semibold text-gray-900 mt-6 mb-2">Frontend (Next.js / TypeScript)</h4>
        <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Package</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Purpose</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['next', 'React framework, App Router, SSR/SSG', 'MIT'],
                ['react', 'UI library', 'MIT'],
                ['react-dom', 'React DOM renderer', 'MIT'],
                ['typescript', 'Type checking and compilation', 'Apache-2.0'],
                ['@supabase/supabase-js', 'Supabase client (Auth, DB, Storage)', 'MIT'],
                ['@supabase/ssr', 'Supabase SSR utilities', 'MIT'],
                ['tailwindcss', 'Utility-first CSS', 'MIT'],
                ['@ai-sdk/google', 'Google AI SDK (Vercel AI)', 'MIT'],
                ['@ai-sdk/react', 'React hooks for AI (Vercel AI)', 'MIT'],
                ['ai', 'Vercel AI SDK', 'Apache-2.0'],
                ['zod', 'Schema validation', 'MIT'],
                ['zustand', 'State management', 'MIT'],
                ['framer-motion', 'Animations', 'MIT'],
                ['recharts', 'Charts and data viz', 'MIT'],
                ['lucide-react', 'Icons', 'ISC'],
                ['react-leaflet', 'Maps (Leaflet bindings)', 'MIT'],
                ['leaflet', 'Maps', 'BSD-2-Clause'],
                ['pdfjs-dist', 'PDF rendering (Mozilla)', 'Apache-2.0'],
                ['mammoth', 'DOCX to HTML (client)', 'BSD-2-Clause'],
                ['xlsx', 'Spreadsheet read/write', 'Apache-2.0'],
                ['jsonwebtoken', 'JWT handling', 'MIT'],
                ['jszip', 'ZIP creation', 'MIT'],
                ['remark-gfm', 'GitHub Flavored Markdown', 'MIT'],
                ['react-markdown', 'Markdown rendering', 'MIT'],
                ['@daily-co/daily-js', 'Video calls (Daily.co)', 'Proprietary / commercial'],
                ['@daily-co/daily-react', 'Daily.co React components', 'Proprietary / commercial'],
              ].map(([pkg, purpose, license]) => (
                <tr key={pkg} className="text-gray-700">
                  <td className="px-4 py-2 font-mono text-xs">{pkg}</td>
                  <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  <td className="px-4 py-2">{license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Backend */}
        <h4 className="font-semibold text-gray-900 mt-6 mb-2">Backend (FastAPI / Python)</h4>
        <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Package</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Purpose</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['fastapi', 'Web framework', 'MIT'],
                ['uvicorn', 'ASGI server', 'BSD-3-Clause'],
                ['pydantic-settings', 'Settings and config', 'MIT'],
                ['sqlalchemy', 'ORM and DB layer', 'MIT'],
                ['supabase', 'Supabase Python client', 'MIT'],
                ['psycopg2-binary', 'PostgreSQL adapter', 'LGPL-3.0'],
                ['raganything[all]', 'RAG engine (LightRAG, etc.)', 'Apache-2.0'],
                ['openai', 'LLM client (LiteLLM proxy)', 'Apache-2.0'],
                ['google-generativeai', 'Gemini API client', 'Apache-2.0'],
                ['mistralai', 'Mistral API client', 'Apache-2.0'],
                ['neo4j', 'Neo4j driver (knowledge graph)', 'Apache-2.0'],
                ['asyncpg', 'Async PostgreSQL', 'Apache-2.0'],
                ['celery', 'Background task queue', 'BSD-3-Clause'],
                ['redis', 'Redis client', 'MIT'],
                ['slowapi', 'Rate limiting', 'MIT'],
                ['prometheus-client', 'Metrics export', 'Apache-2.0'],
                ['httpx', 'Async HTTP client', 'BSD-3-Clause'],
                ['aiohttp', 'Async HTTP', 'Apache-2.0'],
                ['pyjwt', 'JWT encode/decode', 'MIT'],
                ['python-jose', 'JOSE/JWT utilities', 'MIT'],
                ['mammoth', 'DOCX extraction', 'BSD-2-Clause'],
                ['python-docx', 'Word document generation', 'MIT'],
                ['python-pptx', 'PowerPoint handling', 'MIT'],
                ['pandas', 'Data processing', 'BSD-3-Clause'],
                ['openpyxl', 'Excel read/write', 'MIT'],
                ['pillow', 'Image processing', 'HPND'],
                ['qwen-agent', 'Agent framework', 'See package'],
                ['json-repair', 'JSON repair for LLM output', 'MIT'],
              ].map(([pkg, purpose, license]) => (
                <tr key={pkg} className="text-gray-700">
                  <td className="px-4 py-2 font-mono text-xs">{pkg}</td>
                  <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  <td className="px-4 py-2">{license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ETL Pipeline */}
        <h4 className="font-semibold text-gray-900 mt-6 mb-2">ETL Pipeline (Prefect / Python)</h4>
        <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Package</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Purpose</th>
                <th className="px-4 py-2.5 text-left font-semibold text-gray-700">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['prefect', 'Workflow orchestration (flows, tasks)', 'Apache-2.0'],
                ['prefect[github]', 'Prefect GitHub integration', 'Apache-2.0'],
                ['prefect[slack]', 'Prefect Slack notifications', 'Apache-2.0'],
                ['python-dotenv', 'Environment config', 'BSD-3-Clause'],
                ['requests', 'HTTP client', 'Apache-2.0'],
                ['pandas', 'Data transformation', 'BSD-3-Clause'],
                ['supabase', 'Supabase client (warehouse/lake)', 'MIT'],
                ['psycopg2-binary', 'PostgreSQL adapter', 'LGPL-3.0'],
                ['sqlalchemy', 'DB access', 'MIT'],
                ['loguru', 'Logging', 'MIT'],
                ['openpyxl', 'Excel read/write', 'MIT'],
                ['crawl4ai', 'Web crawling (data ingestion)', 'See package'],
                ['unidecode', 'Unicode normalization', 'GPL-2.0 or later'],
                ['pyxlsb', 'Excel binary (.xlsb)', 'MIT'],
                ['pypdf', 'PDF handling', 'BSD-3-Clause'],
                ['ipumspy', 'IPUMS data utilities', 'See package'],
                ['playwright', 'Browser automation', 'Apache-2.0'],
                ['certifi', 'CA certificates', 'MPL-2.0'],
                ['mistralai', 'Mistral API (if used in pipeline)', 'Apache-2.0'],
              ].map(([pkg, purpose, license]) => (
                <tr key={pkg} className="text-gray-700">
                  <td className="px-4 py-2 font-mono text-xs">{pkg}</td>
                  <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  <td className="px-4 py-2">{license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-xs mt-2">
          Licenses are as of the audit date; verify current terms via npmjs.com, pypi.org, or the project repositories. LGPL components (e.g. psycopg2) are used in a way that does not require disclosure of proprietary code; commercial components (e.g. Daily.co) are used under their respective agreements.
        </p>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
