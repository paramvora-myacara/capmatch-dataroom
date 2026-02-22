'use client';

import Image from 'next/image';

type Competitor = {
  name: string;
  automation: number;
  integration: number;
  logoUrl?: string;
  text?: boolean;
};

const competitors: Competitor[] = [
  { name: 'CapMatch', automation: 8, integration: 8, logoUrl: '/CapMatchLogo.png' },
  { name: 'Agrippa', automation: 6.5, integration: 7.5, logoUrl: '/logos/AgrippaLogo.png' },
  { name: 'Henry AI', automation: 8.5, integration: 4, logoUrl: '/logos/HenryAILogo.png' },
  { name: 'Bryckel', automation: 8, integration: 1.5, logoUrl: '/logos/BryckelLogo.png' },
  { name: 'Cherre', automation: 6.5, integration: 2.5, logoUrl: '/logos/cherreLogo.png' },
  { name: 'Northmarq', automation: 2.5, integration: 8, logoUrl: '/logos/NorthMarqLogo.png' },
  { name: 'CBRE', automation: 1, integration: 9, logoUrl: '/logos/CBRELogo.png' },
  { name: 'VTS', automation: 4.5, integration: 3.5, logoUrl: '/logos/VTSLogo.png' },
  { name: 'RCM1', automation: 3, integration: 3.5, logoUrl: '/logos/RCM1Logo.png' },
  { name: 'Buildout', automation: 4, integration: 1, logoUrl: '/logos/BuildoutLogo.png' },
  { name: 'LoopNet', automation: 1.5, integration: 2, logoUrl: '/logos/LoopNetLogo.png' },
  { name: 'Traditional Brokers', automation: 0.5, integration: 3, text: true },
];

export default function CompetitiveAnalysisGraph() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 py-8 md:p-12 bg-white rounded-xl border border-gray-200">
      <div className="relative w-full aspect-square">
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
          const isCapMatch = c.name === 'CapMatch';
          const isAgrippa = c.name === 'Agrippa';

          return (
            <div
              key={c.name}
              className="absolute transition-all duration-500"
              style={{
                top: `${50 - yPos * 50}%`,
                left: `${50 + xPos * 50}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={`relative ${isCapMatch ? 'w-32 h-16 md:w-48 md:h-24' : isAgrippa ? 'w-20 h-10 md:w-32 md:h-16' : 'w-14 h-7 md:w-24 md:h-12'}`}>
                {c.logoUrl ? (
                  <Image
                    src={c.logoUrl}
                    alt={`${c.name} logo`}
                    fill
                    sizes={isCapMatch ? '(max-width: 768px) 128px, 192px' : isAgrippa ? '(max-width: 768px) 80px, 128px' : '(max-width: 768px) 56px, 96px'}
                    style={{ objectFit: 'contain' }}
                    className={isCapMatch ? 'drop-shadow-lg' : ''}
                    unoptimized
                  />
                ) : 'text' in c && c.text ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-center text-[9px] md:text-sm font-semibold text-gray-800">
                      Traditional Brokers
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
