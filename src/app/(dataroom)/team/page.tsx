import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Dr. Jeff Richmond',
    role: 'Co-Founder & CEO',
    content: [
      'Drove $2B+ in annual transaction volume through strategic business development and growth leadership at eXp Realty.',
      'Co-founder of CapMatch and OZ Listings, delivering AI-powered capital markets solutions for multifamily and Opportunity Zone investments.',
      'Chief Operating Partner at ACARA Management, a private equity firm focused on OZ development and capital structuring.',
    ],
  },
  {
    name: 'Todd Vitzthum',
    role: 'Co-Founder & Executive Chairman',
    content: [
      'Executed over $3B in commercial real estate transactions across a 20+ year career, with senior leadership roles at Greystone, Cushman & Wakefield, and CBRE.',
      'As Managing Partner at ACARA Management, he leads multifamily investment strategy and oversees Opportunity Zone deployment across the firm\'s portfolio.',
      'Co-founder of CapMatch and OZ Listings, he drives the creation of tech-enabled capital platforms and national real estate marketplaces.',
    ],
  },
  {
    name: 'Michael Krueger',
    role: 'Chief Legal Officer',
    content: [
      'Corporate & Securities Partner at Lucosky Brookman LLP, advising family offices, private equity funds, and high-net-worth clients on real estate, finance, and corporate structuring.',
      'Nationally recognized OZ expert and "California Trailblazer," with deep experience in QOF/QOZB formation, SEC compliance, and complex capital stack negotiations.',
      'As Chief Legal Officer at ACARA Management, he leads legal strategy for fund deployment, regulatory alignment, and Opportunity Zone execution.',
    ],
  },
  {
    name: 'Param Vora',
    role: 'Chief Technology Officer',
    content: [
      'Former CTO of Solarcheckr, where he drove a 650% increase in financing approvals and led the company through a successful acquisition.',
      'Built advanced AI copilots and automation pipelines as Director of AI at The Cool Down, which grew to over 60 million monthly visits and became the fastest-growing U.S. media brand in early 2025.',
      'With 7+ years in machine learning and a master\'s in AI, he leads CapMatch\'s technology vision across underwriting, automation, and investor intelligence.',
    ],
  },
];

const technicalStaff = [
  {
    name: 'Cody Field',
    role: 'Capital Markets Advisory',
    content: [
      'Strategic and entrepreneurial mortgage banker with demonstrated expertise in structuring and brokering commercial, industrial, and multifamily real estate assets.',
      'Draws from an uncommon background as yacht Captain to build consensus and communicate clearly.',
      'An insightful partner with excellent problem-solving skills and a talent for building collaborative and inclusive relationships in dynamic, fast-paced working environments.',
    ],
  },
  {
    name: 'Aryan Jain',
    role: 'Engineering',
    content: [
      'Aryan brings strong systems thinking and a thorough, detail-oriented approach to building robust technical solutions.',
      'He excels at breaking down complex problems into clear architectures and has a keen eye for edge cases and long-term maintainability.',
      'His combination of technical depth and structured reasoning makes him a key contributor to CapMatch\'s engineering foundation.',
    ],
  },
  {
    name: 'Sarthak Karandikar',
    role: 'Engineering',
    content: [
      'Sarthak focuses on applying technology and systematic thinking to complex commercial real estate and platform problems.',
      'He has experience across startups and open-source development, with a strong interest in AI and in building tools that improve how the industry operates.',
      'He is committed to clear communication and to shipping solutions that create measurable impact.',
    ],
  },
  {
    name: 'Kabeer Ahmed Merchant',
    role: 'Engineering',
    content: [
      'Kabeer is focused on solving hard, overlooked problems in commercial real estate by rebuilding workflows from first principles and applying technology where it delivers real value.',
      'He has deep experience in AI, machine learning, data science, and systems design, with a focus on how complex systems fail and how to rebuild them more reliably.',
      'He works closely with investors, developers, and operators to align technology with business outcomes.',
    ],
  },
  {
    name: 'Vatsal Hariramani',
    role: 'Engineering',
    content: [
      'Vatsal is a builder and entrepreneur focused on complex problems at the intersection of technology and real-world impact.',
      'His background spans AI/ML, IoT, automation, and robotics.',
      'At CapMatch he contributes to product and engineering with an emphasis on moving from concept to scalable solutions.',
    ],
  },
];

export default function TeamPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Team</h1>
      </header>
      
      <DocumentSection title="9.1 Leadership">
        <p className="text-gray-700 text-sm mb-6">
          $6B+ in combined transaction volume and 20+ years of expertise in real estate, lending, and technology.
        </p>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <ul className="space-y-1.5">
                {member.content.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DocumentSection>

      <DocumentSection title="9.2 Engineering & Advisory">
        <p className="text-gray-700 text-sm mb-6">
          Our technical and advisory teams bring deep domain expertise and engineering rigor to CapMatch's platform and client outcomes.
        </p>
        <div className="space-y-6">
          {technicalStaff.map((member) => (
            <div key={member.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <ul className="space-y-1.5">
                {member.content.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DocumentSection>

      <DocumentSection title="9.3 Team Overview">
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li><strong>Current team size:</strong> 10</li>
          <li><strong>Roles filled:</strong> Chief Market Advisor, Head of Growth, Head of Communications, VP Communications, VP Engineering, Head of Investor Relations</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="9.4 Hiring Plan">
        <p className="text-gray-500 text-sm">[Top 3 roles — e.g. Sr. Engineer, GTM, Customer Success]</p>
      </DocumentSection>

      <DocumentSection title="9.5 Resumes">
        <p className="text-gray-500 text-sm">[Add resumes as downloads when available]</p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
