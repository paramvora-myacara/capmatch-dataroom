'use client';

import Image from 'next/image';

type Competitor = {
  name: string;
  automation: number;
  integration: number;
  logoUrl?: string;
  text?: boolean;
  description?: string;
  /** Percentage-point offset from computed position to avoid overlap (e.g. { x: 5, y: -3 }) */
  positionOffset?: { x?: number; y?: number };
};

// Positions spread to avoid overlap; automation = vertical (high = AI-driven), integration = horizontal (high = platform)
const competitors: Competitor[] = [
  {
    name: 'CapMatch',
    automation: 8,
    integration: 8,
    logoUrl: '/CapMatchLogo.png',
    positionOffset: { x: 4, y: -5 },
  },
  {
    name: 'Agrippa',
    automation: 8.0,
    integration: 6.5,
    logoUrl: '/logos/AgrippaLogo.png',
    positionOffset: { x: -5, y: 3 },
    description:
      'An AI-powered, broker-free platform that matches commercial real estate capital seekers directly with capital providers for funding and investment opportunities.',
  },
  {
    name: 'Lev',
    automation: 5.5,
    integration: 5.5,
    logoUrl: '/logos/LevLogo.jpg',
    description:
      'AI-driven platform that matches CRE borrowers with lenders while automating workflows and providing real-time credit data for efficient deal sourcing.',
    positionOffset: { x: 10, y: -3 },
  },
  {
    name: 'Henry AI',
    automation: 8.4,
    integration: 4,
    logoUrl: '/logos/HenryAILogo.png',
    description:
      'An AI copilot for CRE brokers that instantly generates polished deal decks, offering memorandums, brochures, loan packages, and presentations from raw underwriting data.',
  },
  {
    name: 'Bryckel',
    automation: 8,
    integration: 1.5,
    logoUrl: '/logos/BryckelLogo.png',
    description:
      'An AI-driven lease intelligence tool that automates lease reviews, abstractions, risk identification, and comparisons for lawyers, asset managers, and CRE professionals.',
  },
  {
    name: 'Cherre',
    automation: 6.8,
    integration: 6.0,
    logoUrl: '/logos/cherreLogo.png',
    description:
      'A leading real estate data management and intelligence platform that connects fragmented property and market data for analysis, reporting, decision-making, and AI-driven insights.',
    positionOffset: { x: 0, y: -2 },
  },
  {
    name: 'CompStak',
    automation: 5.8,
    integration: 4.5,
    logoUrl: '/logos/CompstakLogo.png',
    description:
      'Data analytics platform offering lease comps, sales comps, loan data, and property insights to inform CRE financing and investment decisions.',
  },
  {
    name: 'CBRE',
    automation: 1,
    integration: 9.1,
    logoUrl: '/logos/CBRELogo.png',
    description:
      "The world's largest commercial real estate services and investment firm, providing brokerage, property management, leasing, valuation, consulting, and facilities management globally.",
  },
  {
    name: 'JLL',
    automation: 2.2,
    integration: 8.5,
    logoUrl: '/logos/JLLLogo.jpg',
    description:
      'Global CRE services firm providing capital markets advisory, financing solutions, and investment management for diverse property types.',
  },
  {
    name: 'Cushman & Wakefield',
    automation: 3.2,
    integration: 7.8,
    logoUrl: '/logos/CushmanWakefieldLogo.png',
    description:
      'International brokerage delivering CRE capital markets services, including debt placement, equity financing, and transaction advisory.',
  },
  {
    name: 'Northmarq',
    automation: 3.8,
    integration: 7.2,
    logoUrl: '/logos/NorthMarqLogo.png',
    description:
      'A full-service capital markets firm offering debt and equity financing, investment sales, loan servicing, and advisory for commercial and multifamily real estate investors nationwide.',
  },
  {
    name: 'Finance Lobby',
    automation: 3.6,
    integration: 6.2,
    logoUrl: '/logos/FinanceLobbyLogo.png',
    description:
      'Nationwide marketplace connecting CRE brokers and borrowers to over 10,000 lenders across debt types, streamlining financing for properties in all 50 states.',
  },
  {
    name: 'StackSource',
    automation: 4,
    integration: 5.3,
    logoUrl: '/logos/StackSourceLogo.png',
    positionOffset: { x: 5, y: 3 },
    description:
      'Fintech solution linking CRE investors with tailored debt and equity financing options from a network of capital providers.',
  },
  {
    name: 'CrowdStreet',
    automation: 4.4,
    integration: 4.8,
    logoUrl: '/logos/CrowdStreetLogo.jpeg',
    positionOffset: { x: -5, y: -3 },
    description:
      'Crowdfunding platform enabling accredited investors to access and fund institutional-grade CRE deals through equity and debt opportunities.',
  },
  {
    name: 'VTS',
    automation: 4.8,
    integration: 3.4,
    logoUrl: '/logos/VTSLogo.png',
    description:
      'A comprehensive CRE technology platform that unifies leasing, asset management, marketing, tenant experience, property operations, and data insights for owners, operators, brokers, and tenants.',
    positionOffset: { x: -5, y: 0 },
  },
  {
    name: 'RCM1',
    automation: 3.2,
    integration: 3.2,
    logoUrl: '/logos/RCM1Logo.png',
    description:
      'A global online marketplace and integrated platform for marketing, listing, and transacting commercial real estate sales, debt, and equity deals with high exposure and efficiency.',
  },
  {
    name: 'Buildout',
    automation: 4.2,
    integration: 1.2,
    logoUrl: '/logos/BuildoutLogo.png',
    description:
      'A connected software platform for CRE brokers that combines CRM, marketing, prospecting, data, and transaction automation to help win listings and close deals faster.',
    positionOffset: { x: -5, y: 0 },
  },
  {
    name: 'LoopNet',
    automation: 1.8,
    integration: 2,
    logoUrl: '/logos/LoopNetLogo.png',
    description:
      'The leading online marketplace for commercial real estate, where users search, list, and advertise properties for sale or lease (part of CoStar Group).',
  },
  {
    name: 'Cadastral',
    automation: 7.0,
    integration: 3.5,
    logoUrl: '/logos/cadastral.jpeg',
    description:
      'AI-powered platform for commercial real estate property research, due diligence, and analytics.',
    positionOffset: { x: -5, y: -3 },
  },
  {
    name: 'APERS',
    automation: 6.5,
    integration: 2.5,
    logoUrl: '/logos/apers.jpeg',
    description:
      'AI-driven property evaluation and risk scoring platform for commercial real estate portfolios.',
    positionOffset: { x: 0, y: 5 },
  },
];  

// Deterministic jitter from name to spread overlapping logos (same quadrant)
function jitterFromName(name: string): { dx: number; dy: number } {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h << 5) - h + name.charCodeAt(i);
    h |= 0;
  }
  const dx = ((Math.abs(h) % 100) / 100) * 8 - 4; // -4% to +4%
  const dy = ((Math.abs(h >> 8) % 100) / 100) * 8 - 4;
  return { dx, dy };
}

export default function CompetitiveAnalysisGraph() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 py-8 md:p-12 bg-white rounded-xl border border-gray-200">
      <div className="relative w-full aspect-square min-h-[320px] md:min-h-[480px]">
        {/* Axis lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 h-0.5 w-full bg-gray-300 -translate-y-1/2" />
        <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full py-2 text-sm md:text-base font-semibold text-teal-600">AI-DRIVEN</p>
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full py-2 text-sm md:text-base font-semibold text-red-500">MANUAL</p>
        <p className="absolute bottom-1/2 left-2 mb-1 text-sm md:text-base font-semibold text-red-500">TOOL BASED</p>
        <p className="absolute bottom-1/2 right-2 mb-1 text-sm md:text-base font-semibold text-teal-600 text-right">PLATFORM</p>

        {/* AI-driven, tool-based quadrant (top-left) */}
        <div className="absolute top-2 left-2 w-[48%] pr-2 pt-1">
          <p className="text-[11px] md:text-xs text-gray-600 leading-snug">
            <span className="font-semibold text-gray-700">AI-driven, tool-based:</span> SaaS tools or AI agents that embed into existing workflows and ecosystems.
          </p>
        </div>

        {/* AI-driven, platform quadrant (top-right) */}
        <div className="absolute top-2 right-2 w-[48%] pl-2 pt-1 text-right">
          <p className="text-[11px] md:text-xs text-gray-600 leading-snug">
            <span className="font-semibold text-gray-700">AI-driven, platform:</span> Full end-to-end platforms rather than point solutions.
          </p>
        </div>

        {competitors.map((c) => {
          const yPos = (c.automation - 5) / 5;
          const xPos = (c.integration - 5) / 5;
          const jitter = jitterFromName(c.name);
          const offset = c.positionOffset ?? { x: 0, y: 0 };
          const isCapMatch = c.name === 'CapMatch';
          const isAgrippa = c.name === 'Agrippa';
          const hasTooltip = Boolean(c.description);

          return (
            <div
              key={c.name}
              className="absolute z-10 transition-all duration-500 group hover:z-[100]"
              style={{
                top: `${50 - yPos * 50 + jitter.dy + (offset.y ?? 0)}%`,
                left: `${50 + xPos * 50 + jitter.dx + (offset.x ?? 0)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {hasTooltip && (
                <div
                  className="pointer-events-none absolute bottom-full left-1/2 z-[1] mb-2 -translate-x-1/2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ width: 'max(200px, min(280px, 90vw))' }}
                >
                  <p className="font-semibold text-gray-900 mb-1">{c.name}</p>
                  <p className="whitespace-normal leading-snug">{c.description}</p>
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
                </div>
              )}
              <div className={`relative ${isCapMatch ? 'w-32 h-16 md:w-48 md:h-24' : isAgrippa ? 'w-20 h-10 md:w-32 md:h-16' : 'w-14 h-7 md:w-24 md:h-12'}`}>
                {c.logoUrl && (
                  <Image
                    src={c.logoUrl}
                    alt={`${c.name} logo`}
                    fill
                    sizes={isCapMatch ? '(max-width: 768px) 128px, 192px' : isAgrippa ? '(max-width: 768px) 80px, 128px' : '(max-width: 768px) 56px, 96px'}
                    style={{ objectFit: 'contain' }}
                    className={isCapMatch ? 'drop-shadow-lg' : ''}
                    unoptimized
                  />
                )}
                {isCapMatch && (
                  <div className="absolute inset-[-6px] rounded-xl border-2 border-blue-400" style={{ animation: 'pulse-ring 2s ease-in-out infinite' }} />
                )}
              </div>
            </div>
          );
        })}

        <style jsx>{`
          @keyframes pulse-ring {
            0%, 100% { opacity: 0.3; box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
            50% { opacity: 1; box-shadow: 0 0 12px 4px rgba(59,130,246,0.25); }
          }
        `}</style>
      </div>
    </div>
  );
}
