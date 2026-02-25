import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

export default function CorporatePage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Corporate + Cap Table</h1>
      </header>
      
      <DocumentSection
        title="Cap Table"
        documents={[{ label: 'capmatch-inc_2026-02-23_summary_cap_intermediate_cap_detailed_cap', href: '/dataroom/cap-table.pdf' }]}
      >
        <p className="text-gray-700 text-sm">
          Current capitalization table including share classes, ownership breakdown, and fully diluted summary.
        </p>
      </DocumentSection>

      <DocumentSection
        title="Equity Incentive Plan"
        documents={[
          { label: 'Equity Incentive Plan 2025', href: '/dataroom/equity-incentive-plan.pdf' },
          { label: 'CapMatch, Inc 2026 Stockholder Approval of Equity Plan', href: '/dataroom/stockholder-approval.pdf' },
          { label: 'CapMatch, Inc 2026 Form of RSA Purchase Agreement', href: '/dataroom/rsa-purchase-agreement.pdf' },
          { label: 'CapMatch, Inc 2026 Form of Option Agreement', href: '/dataroom/option-agreement.pdf' },
          { label: 'CapMatch, Inc 2026 Form of Exercise Agreement', href: '/dataroom/exercise-agreement.pdf' },
        ]}
      >
        <p className="text-gray-700 text-sm">
          CapMatch&apos;s 2025 Equity Incentive Plan and associated grant forms, including stockholder approval, RSA purchase agreements, option agreements, and exercise agreements.
        </p>
      </DocumentSection>

      <DocumentSection title="Team Agreements">
        <p className="text-gray-700 text-sm">
          Independent Contractor Agreements (ICAs) and Service-for-Equity agreements signed by team members. Documents will be uploaded as they are finalized.
        </p>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
