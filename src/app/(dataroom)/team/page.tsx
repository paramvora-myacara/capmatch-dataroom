import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

const teamMembers = [
  {
    name: 'Dr. Jeff Richmond',
    role: 'Chief Executive Officer',
    oneLine: 'Drives AI-powered capital markets for multifamily and Opportunity Zone investments at CapMatch and OZ Listings. Former growth leadership at eXp Realty ($2B+ annual volume) and Chief Operating Partner at ACARA Management.',
    relevantExperienceYears: 15,
    companies: 'eXp Realty, ACARA Management, OZ Listings, CapMatch',
  },
  {
    name: 'Param Vora',
    role: 'Chief Technology Officer & Chief Operating Officer',
    oneLine: 'Leads CapMatch\'s technology vision across underwriting, automation, and investor intelligence. Former CTO of Solarcheckr (650% increase in financing approvals, successful acquisition); Director of AI at The Cool Down (60M+ monthly visits, fastest-growing U.S. media brand in early 2025).',
    relevantExperienceYears: 3,
    companies: 'Solarcheckr, The Cool Down, Urbaness',
  },
  {
    name: 'Todd Vitzthum',
    role: 'Executive Chairman',
    oneLine: 'Executed over $3B in commercial real estate transactions. Drives tech-enabled capital platforms at CapMatch and OZ Listings. Managing Partner at ACARA Management leading multifamily investment strategy and Opportunity Zone deployment.',
    relevantExperienceYears: 23,
    companies: 'Greystone, Cushman & Wakefield, CBRE, ACARA Management',
  },
  {
    name: 'Michael Krueger',
    role: 'Chief Legal Officer',
    oneLine: 'Nationally recognized OZ expert and California Trailblazer; Corporate & Securities Partner at Lucosky Brookman LLP. Chief Legal Officer at ACARA Management leading legal strategy for fund deployment, regulatory alignment, and Opportunity Zone execution.',
    relevantExperienceYears: 10,
  },
  {
    name: 'Gregory J. Kapust',
    role: 'Advisory',
    oneLine: 'Brings strategic and operational expertise to CapMatch\'s leadership and growth initiatives.',
    relevantExperienceYears: 1,
  },
];

const technicalStaff = [
  {
    name: 'Cody Field',
    role: 'Capital Markets Advisory',
    oneLine: 'Strategic mortgage banker with expertise in structuring and brokering commercial, industrial, and multifamily real estate; builds consensus and collaborates effectively with an uncommon background as yacht Captain.',
    relevantExperienceYears: 20,
    showRelevantExperience: true,
  },
  {
    name: 'Aryan Jain',
    role: 'Engineering',
    oneLine: 'Former founder of a venture-backed AI product company, building intelligent automation tools for enterprise workflows. IIT Madras graduate. Contributes across backend systems and data infrastructure at CapMatch.',
    education: 'IIT Madras',
    relevantExperienceYears: 1,
    showRelevantExperience: true,
  },
  {
    name: 'Sarthak Karandikar',
    role: 'Engineering',
    oneLine: 'Former founder of an AI startup that built multiple products, including an open-source personal assistant with 700+ GitHub stars. Background in AI systems, open-source tooling, and early-stage ventures. Contributes across product, engineering, and content at CapMatch.',
    relevantExperienceYears: 1,
    showRelevantExperience: true,
  },
  {
    name: 'Kabeer Ahmed Merchant',
    role: 'Engineering',
    oneLine: 'Previously co-founded an AI startup, shipping several products including an open-source personal assistant that gained 700+ stars on GitHub. Deep experience in AI/ML, systems design, and full-stack engineering. Works across product, engineering, and content at CapMatch.',
    relevantExperienceYears: 1,
    showRelevantExperience: true,
  },
  {
    name: 'Vatsal Hariramani',
    role: 'Engineering',
    oneLine: 'Former founder of a venture-backed MedTech startup, supported by Emergent Ventures, building intelligent monitoring and embedded systems for reliability and continuous care in neonatal and clinical environments, including deployments in remote and challenging settings such as the Himalayas. Holds a granted Indian utility patent for the same. Contributes across product and engineering at CapMatch.',
    education: 'IIT Mandi; TU Munich (semester abroad)',
    relevantExperienceYears: 1,
    showRelevantExperience: true,
  },
];

export default function TeamPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Team</h1>
      </header>
      
      <DocumentSection title="Leadership">
        <p className="text-gray-700 text-sm mb-6">
          $6B+ in combined transaction volume and 20+ years of expertise in real estate, lending, and technology.
        </p>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{member.oneLine}</p>
              <p className="text-gray-600 text-sm">
                <strong>Relevant experience:</strong> {member.relevantExperienceYears} years
              </p>
              {'companies' in member && member.companies && (
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Companies / real estate:</strong> {member.companies}
                </p>
              )}
            </div>
          ))}
        </div>
      </DocumentSection>

      <DocumentSection title="Engineering & Advisory">
        <p className="text-gray-700 text-sm mb-6">
          Our technical and advisory teams bring deep domain expertise and engineering rigor to CapMatch&apos;s platform and client outcomes.
        </p>
        <hr className="border-gray-200 mb-8" />
        <div className="space-y-6">
          {technicalStaff.map((member) => (
            <div key={member.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{member.oneLine}</p>
              {'showRelevantExperience' in member && member.showRelevantExperience && (
                <p className="text-gray-600 text-sm">
                  <strong>Relevant experience:</strong> {member.relevantExperienceYears} years
                </p>
              )}
              {'education' in member && member.education && (
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Education:</strong> {member.education}
                </p>
              )}
            </div>
          ))}
        </div>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
