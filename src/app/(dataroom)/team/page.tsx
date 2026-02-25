import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

const teamMembers = [
  {
    name: 'Dr. Jeff Richmond',
    role: 'Chief Executive Officer',
    oneLine: <>15 years of experience driving AI-powered capital markets for multifamily and Opportunity Zone investments at <strong>CapMatch</strong> and <strong>OZ Listings</strong>. Former growth leadership at <strong>eXp Realty</strong> ($2B+ annual volume) and Chief Operating Partner at <strong>ACARA Management</strong>.</>,
  },
  {
    name: 'Param Vora',
    role: 'Chief Technology Officer & Chief Operating Officer',
    oneLine: <>Director of AI at <strong>The Cool Down</strong> (60M+ monthly visits, fastest-growing U.S. media brand in early 2025). Former CTO of <strong>Solarcheckr</strong> (650% increase in financing approvals, successful acquisition); <strong>Cleantech Open</strong> alumnus. Chief BD at <strong>Urbanests Housing Services</strong> for 1Y. 9+ years of ML/AI experience. Leading CapMatch&apos;s technology vision across underwriting, automation, and investor intelligence.</>,
  },
  {
    name: 'Todd Vitzthum',
    role: 'Executive Chairman',
    oneLine: <>23 years of experience, executing over <strong>$3B</strong> in commercial real estate transactions. Drives tech-enabled capital platforms at <strong>CapMatch</strong> and <strong>OZ Listings</strong>. Managing Partner at <strong>ACARA Management</strong> leading multifamily investment strategy and Opportunity Zone deployment.</>,
  },
  {
    name: 'Michael Krueger',
    role: 'Chief Legal Officer',
    oneLine: <>Partner at <strong>Lucosky Brookman LLP</strong>, corporate and securities attorney specializing in capital markets, structured finance, and complex transactions. Ensures CapMatch operates with regulatory rigor, transaction integrity, and governance frameworks suitable for institutional counterparties.</>,
  },
  {
    name: 'Gregory J. Kapust',
    role: 'Advisory',
    oneLine: <>Deep experience in finance, governance, and capital allocation, with four successful exits including three exceeding <strong>$100M</strong>. Active real estate investor, providing disciplined financial oversight and ensuring CapMatch is built to scale responsibly while competing aggressively on outcomes.</>,
  },
];

const technicalStaff = [
  {
    name: 'Cody Field',
    role: 'Capital Markets Advisory',
    oneLine: <>20 years as a strategic mortgage banker structuring and brokering commercial, industrial, and multifamily real estate. Served as Vice President at <strong>NorthMarq</strong> and Senior Analyst at <strong>Greystone</strong>. Also held the role of Yacht Captain.</>,
  },
  {
    name: 'Aryan Jain',
    role: 'Engineering',
    oneLine: <>Former founder and software engineer with a background in AI productivity tools. Built and scaled a venture-backed company from zero to revenue and through a successful exit. Founded <strong>SmailBox</strong> and <strong>UsePRD</strong>, a <strong>gradCapital</strong>-backed startup focused on intelligent automation. Originally developed SmailBox, an AI-driven email client designed for advanced email inbox automation. Successfully pivoted the core technology to UsePRD, an application generating high-fidelity implementation plans for coding agents, and sold the product after seeing early revenue and traction. Selected as one of 50 founders for <strong>Founders Inc.</strong> Off-Season in San Francisco — a highly selective residency for building emerging technology at their Fort Mason campus.</>,
    education: 'IIT Madras, Computer Science & Engineering — B.Tech (2023–2027). Achieved a historic branch change from Metallurgy to Computer Science (top 150 AIR cutoff), placing in the top 0.01% of 1.5 million JEE entrants.',
  },
  {
    name: 'Sarthak Karandikar',
    role: 'Engineering',
    oneLine: <>Former founder of AI startup <strong>Existence</strong>, building products including open-source personal assistant <strong>Sentient</strong> with <strong>700+</strong> GitHub stars and <strong>400+</strong> users. Published 4 research papers at international conferences; holds an Indian patent for an edtech AI product. Experience scaling and monetizing content across social platforms. Contributes across product management, engineering, and content at CapMatch.</>,
    education: "Pune Vidyarthi Griha's College of Engineering and Technology",
  },
  {
    name: 'Kabeer Ahmed Merchant',
    role: 'Engineering',
    oneLine: <>Former founder of <strong>Existence</strong> with experience across engineering, product development, community building and research. Built <strong>Sentient</strong>, an open-source proactive personal assistant (<strong>700+</strong> GitHub stars) engineered to operate with the autonomy required to replace traditional human assistants. The project evolved into <strong>Sentient Cloud</strong>, an international platform serving <strong>200+</strong> users across the US, Germany, Turkey, and other global markets, successfully generating initial revenue. This global reach was driven by an organic ecosystem, scaling a dedicated WhatsApp community to <strong>1,000+</strong> members and amassing over <strong>14 million</strong> total views across YouTube (5,000+ subscribers, 10M+ views) and Instagram (1,000+ followers, 4M+ views). Holds a granted Indian patent and has published three research papers resulting from other technical products developed at Existence.</>,
    education: "Artificial Intelligence and Data Science (2022–2026) @ Pune Vidyarthi Griha's College of Engineering and Technology, Pune",
  },
  {
    name: 'Vatsal Hariramani',
    role: 'Engineering',
    oneLine: <>Former founder with experience in robotics, computer vision, and reliability-focused systems engineering. Previously at <strong>MITI Labs</strong> and <strong>Fortiss Labs</strong> (Munich). Founded <strong>Syncubator</strong>, a venture-backed MedTech startup supported by <strong>Emergent Ventures</strong>, <strong>NIDHI PRAYAS</strong>, <strong>CPS PRAYAS</strong>, and <strong>gradCapital</strong>. Holds a granted Indian utility patent.</>,
    education: 'B.Tech, Computer Science & Engineering, IIT Mandi · TU Munich, Informatics (Semester Abroad)',
  },
];

export default function TeamPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Team</h1>
      </header>
      
      <DocumentSection title="Leadership">
        <p className="text-gray-700 text-sm mb-6">
          $6B+ in combined transaction volume and 20+ years of expertise in real estate, lending, and technology.
        </p>
        <div className="space-y-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{member.oneLine}</p>
            </div>
          ))}
        </div>
      </DocumentSection>

      <DocumentSection title="Engineering & Advisory">
        <p className="text-gray-700 text-sm mb-6">
          Our technical and advisory teams bring deep domain expertise and engineering rigor to CapMatch&apos;s platform and client outcomes.
        </p>
        <hr className="border-gray-200 mb-8" />
        <div className="space-y-8">
          {technicalStaff.map((member) => (
            <div key={member.name} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{member.oneLine}</p>
              {'education' in member && member.education && (
                <p className="text-gray-500 text-sm mt-2">
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
