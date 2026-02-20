import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Security + Privacy + Compliance</h1>
      </header>
      
      <DocumentSection title="8.1 Security Overview">
        <p className="text-gray-500 text-sm mb-3">
          [NEEDED — 2 pages: access controls, logging, incident response]
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Access controls: Email allowlist, session-based auth</li>
          <li>Logging: Page access logged to console (Vercel logs)</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="8.2 Privacy">
        <p className="text-gray-500 text-sm">[Privacy policy, retention summary]</p>
      </DocumentSection>

      <DocumentSection title="8.3 Regulatory Posture">
        <p className="text-gray-500 text-sm">
          [1-page note: what we are/are not; where counsel is engaged. Lending licensing (CFL), Fair Lending (ECOA), Data Privacy (GDPR/CCPA).]
        </p>
      </DocumentSection>

      <DocumentSection title="8.4 SOC2 Roadmap">
        <p className="text-gray-500 text-sm">
          [1-page plan: current status → milestones → target window. Moving towards SOC2.]
        </p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
