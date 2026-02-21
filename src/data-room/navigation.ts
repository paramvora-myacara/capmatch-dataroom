export const DATAROOM_SECTIONS = [
  { title: 'Read Me First', href: '/', slug: 'index', description: 'Overview, company snapshot, index, and fundraise summary.' },
  { title: 'Company', href: '/company', slug: 'company', description: 'Pitch deck, product one-pager, and investor memo.' },
  { title: 'Product + Tech', href: '/product-tech', slug: 'product-tech', description: 'Product workflow, built vs in progress, architecture, and tech stack.' },
  { title: 'Market + Strategy', href: '/market-strategy', slug: 'market-strategy', description: 'Market map, ICP, competitive positioning, and go-to-market.' },
  { title: 'Traction', href: '/traction', slug: 'traction', description: 'Pipeline metrics, signed contracts, and case studies.' },
  { title: 'Financials', href: '/financials', slug: 'financials', description: 'Revenue trajectory, unit economics, and 3-year P&L.' },
  { title: 'Corporate + Cap Table', href: '/corporate', slug: 'corporate', description: 'Formation docs, cap table, option plan, and material contracts.' },
  { title: 'IP + Data Rights', href: '/ip-data', slug: 'ip-data', description: 'IP assignment, open-source inventory, and data rights.' },
  { title: 'Security + Privacy', href: '/security', slug: 'security', description: 'Security overview, privacy, regulatory posture, and SOC2 roadmap.' },
  { title: 'Team', href: '/team', slug: 'team', description: 'Leadership, technical staff, and advisors.' },
] as const;
