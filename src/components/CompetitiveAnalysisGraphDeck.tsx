'use client';

import Image from 'next/image';

type Competitor = {
  name: string;
  automation: number;
  integration: number;
  logoUrl?: string;
  description?: string;
  positionOffset?: { x?: number; y?: number };
};

const competitors: Competitor[] = [
  {
    name: 'CapMatch',
    automation: 8.2,
    integration: 8.2,
    logoUrl: '/CapMatchLogo.png',
    positionOffset: { x: 0, y: 0 },
  },
  {
    name: 'Agrippa',
    automation: 7.8,
    integration: 6.8,
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
      'A workflow automation tool that CRE professionals use to manage and accelerate their own financing processes.',
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
    name: 'CompStak',
    automation: 5.8,
    integration: 4.5,
    logoUrl: '/logos/CompstakLogo.png',
    description:
      'Data analytics platform offering lease comps, sales comps, loan data, and property insights to inform CRE financing and investment decisions.',
  },
  {
    name: 'CBRE',
    automation: 2.0,
    integration: 6.8,
    logoUrl: '/logos/CBRELogo.png',
    description:
      "The world's largest commercial real estate services and investment firm, providing brokerage, property management, leasing, valuation, consulting, and facilities management globally.",
  },
  {
    name: 'JLL',
    automation: 2.8,
    integration: 8.8,
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
    automation: 2.2,
    integration: 2.2,
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
      "Builds AI agents that 'speak real estate,' automating end-to-end workflows like T-12 analysis, lease abstraction, and loan compliance.",
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

function jitterFromName(name: string): { dx: number; dy: number } {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h << 5) - h + name.charCodeAt(i);
    h |= 0;
  }
  const dx = ((Math.abs(h) % 100) / 100) * 8 - 4;
  const dy = ((Math.abs(h >> 8) % 100) / 100) * 8 - 4;
  return { dx, dy };
}

export default function CompetitiveAnalysisGraphDeck() {
  return (
    <div className="comp-map-logos">
      {/* Axis lines rendered via CSS ::before / ::after on .comp-map-logos */}

      <span className="ax-dk top">AI-Driven</span>
      <span className="ax-dk bottom">Manual</span>
      <span className="ax-dk left">Tool Based</span>
      <span className="ax-dk right">Platform</span>

      <div className="ql-dk" style={{ top: 20, left: 20 }}>
        <span className="ql-dk-title">AI-driven, tool-based:</span> SaaS tools or AI agents embedding into existing workflows
      </div>
      <div className="ql-dk" style={{ top: 20, right: 20, textAlign: 'right' }}>
        <span className="ql-dk-title">AI-driven, platform:</span> Full end-to-end platforms
      </div>
      <div className="ql-dk" style={{ bottom: 20, left: 20 }}>
        <span className="ql-dk-title">Manual, tool-based:</span> Traditional databases, listing services, spreadsheets
      </div>
      <div className="ql-dk" style={{ bottom: 20, right: 20, textAlign: 'right' }}>
        <span className="ql-dk-title">Manual, platform:</span> Integrated marketplaces, manual coordination
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
            className="logo-dot"
            style={{
              top: `${50 - yPos * 50 + jitter.dy + (offset.y ?? 0)}%`,
              left: `${50 + xPos * 50 + jitter.dx + (offset.x ?? 0)}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isCapMatch ? 20 : 10,
            }}
          >
            {hasTooltip && (
              <div className="logo-tooltip">
                <p className="logo-tooltip-name">{c.name}</p>
                <p className="logo-tooltip-desc">{c.description}</p>
                <div className="logo-tooltip-arrow" />
              </div>
            )}
            <div
              className={`logo-img-wrap ${isCapMatch ? 'logo-cm' : isAgrippa ? 'logo-agrippa' : 'logo-std'}`}
            >
              {c.logoUrl && (
                <Image
                  src={c.logoUrl}
                  alt={`${c.name} logo`}
                  fill
                  sizes={isCapMatch ? '120px' : isAgrippa ? '72px' : '52px'}
                  style={{ objectFit: 'contain' }}
                  className={isCapMatch ? 'cm-shadow' : ''}
                  unoptimized
                />
              )}
              {isCapMatch && <div className="cm-ring" />}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes pulse-ring-dk {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 0 0 rgba(43,138,255,0.3); }
          50% { opacity: 1; box-shadow: 0 0 16px 6px rgba(43,138,255,0.25); }
        }
      `}</style>
    </div>
  );
}
