import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Company</h1>
      </header>
      
      <DocumentSection
        title="1.1 Pitch Deck"
        documents={[{ label: 'Pitch Deck (PDF)', href: '/dataroom/pitch-deck.pdf' }]}
      >
        <p className="text-gray-600 text-sm">
          [Add pitch deck to <code>public/dataroom/pitch-deck.pdf</code>]
        </p>
      </DocumentSection>

      <DocumentSection title="1.2 Product One-Pager">
        <p className="text-gray-600 text-sm">[Add product one-pager — link or embed]</p>
      </DocumentSection>

      <DocumentSection title="1.3 Demo Video">
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            Platform demo showing deal intake, packaging, and execution workflow.
          </p>
          <div className="aspect-video max-w-2xl rounded-md overflow-hidden bg-gray-100 border border-gray-200">
            <video
              src="/CapMatchDemo720p.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="1.4 Investor Memo">
        <p className="text-gray-600 text-sm">[Add investor memo document — link when available]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
