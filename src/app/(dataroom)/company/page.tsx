import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

export default function CompanyPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Company</h1>
      </header>
      
      <DocumentSection
        title="Pitch Deck"
        documents={[{ label: 'CapMatch - Deck 20260212', href: '/dataroom/pitch-deck.pdf' }]}
      >
        <p className="text-gray-700 text-sm">
          CapMatch investor pitch deck.
        </p>
      </DocumentSection>

      <DocumentSection title="Product One-Pager">
        <div className="w-full">
          <div className="w-full rounded-lg overflow-hidden border border-gray-200" style={{ height: '85vh' }}>
            <iframe
              src="https://capmatch.com"
              title="CapMatch - Product Overview"
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}

