import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function CorporatePage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Corporate + Cap Table</h1>
      </header>
      
      <DocumentSection
        title="Formation Docs"
        documents={[{ label: 'Certificate of Incorporation', href: '/dataroom/formation-cert.pdf' }, { label: 'Bylaws', href: '/dataroom/bylaws.pdf' }]}
      >
        <p className="text-gray-500 text-sm">[Add formation documents]</p>
      </DocumentSection>

      <DocumentSection
        title="Board + Stockholder Consents"
        documents={[{ label: 'Board minutes', href: '/dataroom/board-minutes.pdf' }]}
      >
        <p className="text-gray-500 text-sm">[Add consents and minutes]</p>
      </DocumentSection>

      <DocumentSection
        title="Cap Table + Option Plan + Grants"
        documents={[
          { label: 'Cap Table', href: '/dataroom/cap-table.xlsx' },
          { label: 'Option Plan', href: '/dataroom/option-plan.pdf' },
        ]}
      >
        <p className="text-gray-500 text-sm">[Add cap table and option plan — Carta export when available]</p>
      </DocumentSection>

      <DocumentSection title="Prior Financings">
        <p className="text-gray-500 text-sm">[SAFEs, notes, side letters — if any]</p>
      </DocumentSection>

      <DocumentSection title="Material Contracts">
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Broker affiliate agreements (see Traction)</li>
          <li>Customer templates + signed examples</li>
          <li>Vendor agreements (esp. data)</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="Insurance">
        <p className="text-gray-500 text-sm">[Workers comp if applicable; D&amp;O at pre-seed optional]</p>
      </DocumentSection>

      <DocumentSection title="Monthly Expense Report">
        <p className="text-gray-500 text-sm">[Link from Index — include here or in Financial Overview]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
