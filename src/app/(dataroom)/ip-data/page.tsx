import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function IpDataPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">IP + Data Rights</h1>
      </header>
      
      <DocumentSection
        title="7.1 IP Assignment"
        documents={[{ label: 'IP Assignment (employee/contractor)', href: '/dataroom/ip-assignment.pdf' }]}
      >
        <p className="text-gray-500 text-sm">[Add IP assignment agreements]</p>
      </DocumentSection>

      <DocumentSection title="7.2 Open-Source Inventory">
        <p className="text-gray-500 text-sm mb-2">[License snapshot of dependencies]</p>
        <p className="text-gray-600 text-xs">Key stack: Next.js, React, TypeScript, Tailwind</p>
      </DocumentSection>

      <DocumentSection title="7.3 Data Rights Summary">
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1.5">
          <li><strong>What data is used today:</strong> Deal data, borrower/project info, ingestion pipelines</li>
          <li><strong>License terms:</strong> [NEEDED — Legal]</li>
          <li><strong>Risks / renewals:</strong> [NEEDED]</li>
          <li><strong>Planned purchases:</strong> Lender/buy-box data for matching (use-of-funds)</li>
        </ul>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
