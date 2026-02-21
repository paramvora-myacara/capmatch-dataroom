import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Company</h1>
      </header>
      
      <DocumentSection
        title="Pitch Deck"
        documents={[{ label: 'Pitch Deck (PDF)', href: '/dataroom/pitch-deck.pdf' }]}
      >
        <p className="text-gray-600 text-sm">
          [Add pitch deck to <code>public/dataroom/pitch-deck.pdf</code>]
        </p>
      </DocumentSection>

      <DocumentSection title="Product One-Pager">
        {/* Break out of content column so one-pager can be wider and centered */}
        <div className="relative left-1/2 -translate-x-1/2 w-[min(100vw,72rem)]">
          <div className="w-full rounded-lg overflow-hidden border border-gray-200" style={{ height: '70vh' }}>
            <iframe
              src="https://capmatch.com"
              title="CapMatch — Product Overview"
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="Investor Memo">
        <p className="text-gray-600 text-sm">[Add investor memo document — link when available]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}

