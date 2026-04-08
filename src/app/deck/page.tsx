import type { Metadata } from 'next';
import CompetitiveAnalysisGraphDeck from '@/components/CompetitiveAnalysisGraphDeck';

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: 'CapMatch — Company Brief',
  description:
    'CapMatch: The Operating System for CRE Debt. Vertical AI platform for borrowers and lenders.',
};

export default function DeckPage() {
  return (
    <>
      {/* Google Fonts for this standalone page */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
:root {
  --bg: #060810;
  --s1: #0C0F18;
  --s2: #11151F;
  --card: #161B28;
  --blue: #2B8AFF;
  --blue2: #5BA3FF;
  --bd: rgba(43,138,255,.14);
  --bbg: rgba(43,138,255,.06);
  --gold: #FBBF24;
  --gbg: rgba(251,191,36,.06);
  --red: #F87171;
  --teal: #34D399;
  --w: #EFF3F8;
  --g1: #B0BFCF;
  --g2: #8B9DB3;
  --g3: #6B7D93;
  --g4: #3D4A5C;
  --ln: rgba(255,255,255,.05);
  --ln2: rgba(255,255,255,.08);
}
.deck-shell {
  position: fixed;
  inset: 0;
  overflow-y: auto;
  background: var(--bg);
  color: var(--w);
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 17px;
  zoom: 1.25;
}
.deck-shell * { margin: 0; padding: 0; box-sizing: border-box; }

.report {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 56px;
}

.masthead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 24px;
  border-bottom: 2px solid var(--blue);
}
.masthead-left h1 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 1;
  color: var(--w);
}
.masthead-left h1 em { font-style: italic; color: var(--blue); font-weight: 600; }
.masthead-sub {
  font-size: 16px;
  color: var(--g2);
  font-weight: 300;
  margin-top: 6px;
}
.masthead-right {
  display: flex;
  gap: 36px;
  align-items: flex-end;
}
.mstat { text-align: right; }
.mstat-val {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
}
.mstat-val.blue { color: var(--blue); }
.mstat-val.gold { color: var(--gold); }
.mstat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--g2);
  margin-top: 4px;
}

.datebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--ln2);
}
.datebar span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--g2);
  letter-spacing: 0.5px;
}
.datebar .tag {
  color: var(--blue);
  border: 1px solid var(--bd);
  background: var(--bbg);
  padding: 4px 14px;
  border-radius: 3px;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.sec-label {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: var(--w);
  padding: 36px 0 14px;
  border-bottom: 1px solid var(--ln2);
  margin-bottom: 24px;
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.sec-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--ln2), transparent);
}
.sec-label em { font-style: italic; color: var(--blue); }

.exec-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 40px;
  margin-bottom: 8px;
}
.exec-narrative p {
  font-size: 17px;
  color: var(--g1);
  font-weight: 300;
  line-height: 1.75;
}
.exec-narrative p strong { color: var(--w); font-weight: 500; }
.exec-narrative .thesis {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.3px;
  color: var(--g1);
  border-left: 3px solid var(--blue);
  padding-left: 20px;
  margin-bottom: 16px;
}
.exec-narrative .thesis em { font-style: italic; color: var(--blue); }

.traction-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 18px;
}
.traction-card {
  padding: 14px 16px;
  background: var(--s1);
  border: 1px solid var(--ln);
  border-radius: 8px;
  border-top: 2px solid var(--blue);
}
.traction-card:last-child { border-top-color: var(--gold); }
.tc-val {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-bottom: 2px;
}
.tc-val.blue { color: var(--blue); }
.tc-val.gold { color: var(--gold); }
.tc-title { font-size: 15px; font-weight: 600; margin-bottom: 3px; }
.tc-desc { font-size: 14px; color: var(--g2); font-weight: 300; line-height: 1.5; }

.team-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 8px;
}
table.team-table { width: 100%; border-collapse: collapse; }
table.team-table th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--g3);
  font-weight: 400;
  text-align: left;
  padding: 10px 14px;
  border-bottom: 1px solid var(--ln2);
  background: var(--s1);
}
table.team-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--ln);
  vertical-align: top;
  line-height: 1.5;
}
table.team-table tr:last-child td { border-bottom: none; }
.tm-name { font-size: 16px; font-weight: 600; margin-bottom: 2px; }
.tm-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--blue);
}
.tm-bio { font-size: 14px; color: var(--g2); font-weight: 300; }
.team-footer {
  font-size: 15px;
  color: var(--g2);
  font-weight: 300;
  line-height: 1.65;
  padding: 16px 0 0;
  border-top: 1px solid var(--ln);
  margin-top: 8px;
}
.team-footer strong { color: var(--g1); font-weight: 500; }
.team-footer b { color: var(--blue); font-weight: 400; }

.problem-grid {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 32px;
  margin-bottom: 8px;
}
.problem-quote {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--g1);
  border-left: 3px solid var(--blue);
  padding-left: 20px;
  align-self: start;
}
.problem-quote em { font-style: italic; color: var(--blue); }
.problem-desc {
  font-size: 16px;
  color: var(--g2);
  font-weight: 300;
  line-height: 1.65;
  margin-bottom: 16px;
}
table.pain-table { width: 100%; border-collapse: collapse; }
table.pain-table th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--g3);
  font-weight: 400;
  text-align: left;
  padding: 10px 16px;
  border-bottom: 1px solid var(--ln2);
  background: var(--s1);
}
table.pain-table td {
  padding: 10px 16px;
  color: var(--g2);
  font-size: 15px;
  font-weight: 300;
  border-bottom: 1px solid var(--ln);
  vertical-align: top;
  line-height: 1.5;
}
table.pain-table tr:last-child td { border-bottom: none; }

.whynow-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 32px;
  margin-bottom: 8px;
}
.chart-container {
  background: var(--s1);
  border: 1px solid var(--ln);
  border-radius: 10px;
  padding: 24px 28px 20px;
}
.chart-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-bottom: 4px;
}
.chart-title em { font-style: italic; color: var(--gold); }
.chart-subtitle { font-size: 14px; color: var(--g2); font-weight: 300; margin-bottom: 20px; }
.chart-subtitle b { color: var(--gold); font-weight: 500; }
.hbar-row {
  display: grid;
  grid-template-columns: 60px 1fr 64px;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.hbar-year {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--g3);
  text-align: right;
}
.hbar-year.now { color: var(--gold); font-weight: 500; }
.hbar-track { height: 28px; background: var(--bg); border-radius: 4px; overflow: hidden; }
.hbar-fill { height: 100%; border-radius: 4px; }
.hbar-val { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--g2); }

.catalyst-stack { display: flex; flex-direction: column; gap: 12px; }
.catalyst {
  padding: 18px 20px;
  background: var(--s1);
  border: 1px solid var(--ln);
  border-radius: 8px;
  border-left: 3px solid var(--blue);
}
.catalyst:nth-child(2) { border-left-color: var(--gold); }
.catalyst:nth-child(3) { border-left-color: var(--blue2); }
.catalyst-val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 4px;
}
.catalyst:nth-child(1) .catalyst-val { color: var(--blue); }
.catalyst:nth-child(2) .catalyst-val { color: var(--gold); }
.catalyst:nth-child(3) .catalyst-val { color: var(--blue2); }
.catalyst-title { font-size: 16px; font-weight: 600; margin-bottom: 5px; }
.catalyst-desc { font-size: 14px; color: var(--g2); font-weight: 300; line-height: 1.6; }

table.gtm-table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
table.gtm-table th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--g3);
  font-weight: 400;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--ln2);
  background: var(--s1);
}
table.gtm-table td {
  padding: 14px 16px;
  font-size: 16px;
  color: var(--g2);
  font-weight: 300;
  border-bottom: 1px solid var(--ln);
  vertical-align: top;
  line-height: 1.6;
}
table.gtm-table tr:last-child td { border-bottom: none; }
table.gtm-table td:first-child {
  font-family: 'JetBrains Mono', monospace;
  color: var(--blue);
  font-size: 15px;
  opacity: 0.5;
  width: 40px;
  text-align: center;
}
table.gtm-table td:nth-child(2) { color: var(--w); font-weight: 500; width: 200px; }
table.gtm-table .gtm-tag {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--blue);
  opacity: 0.6;
  margin-top: 3px;
  letter-spacing: 0.5px;
}

.comp-section { margin-bottom: 8px; }
.comp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.comp-map {
  position: relative;
  aspect-ratio: 1 / 1;
  min-height: 480px;
  border: 1px solid var(--ln2);
  border-radius: 10px;
  background: var(--s1);
  overflow: hidden;
}
.comp-map::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--ln2);
}
.comp-map::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--ln2);
}
.ax {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--g3);
  position: absolute;
  opacity: 0.8;
  font-weight: 500;
}
.ax.top { top: 12px; left: 50%; transform: translateX(-50%); color: var(--teal); }
.ax.bottom { bottom: 12px; left: 50%; transform: translateX(-50%); color: var(--red); }
.ax.left { left: 12px; top: 50%; transform: translateY(-50%) rotate(-90deg); color: var(--red); }
.ax.right { right: 12px; top: 50%; transform: translateY(-50%) rotate(90deg); color: var(--teal); }
.qlabel {
  position: absolute;
  font-size: 11px;
  color: var(--g2);
  font-weight: 300;
  line-height: 1.45;
  opacity: 0.7;
  max-width: 200px;
}
.cdot {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--g2);
  padding: 5px 12px;
  border: 1px solid var(--ln);
  border-radius: 4px;
  background: var(--bg);
  white-space: nowrap;
  cursor: default;
  transition: all 0.2s;
}
.cdot:hover {
  border-color: var(--ln2);
  color: var(--g1);
  transform: scale(1.06);
  z-index: 10;
}
.cdot.cm {
  font-size: 14px;
  font-weight: 600;
  color: var(--blue);
  border-color: var(--bd);
  background: var(--bbg);
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 0 24px rgba(43,138,255,.1);
  z-index: 5;
}
.comp-map-logos {
  position: relative;
  aspect-ratio: 1 / 1;
  min-height: 480px;
  border: 1px solid var(--ln2);
  border-radius: 10px;
  background: var(--s1);
  overflow: visible;
}
.comp-map-logos::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--ln2);
}
.comp-map-logos::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--ln2);
}
.ax-dk {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: absolute;
  opacity: 0.8;
  font-weight: 500;
  z-index: 2;
}
.ax-dk.top { top: 12px; left: 50%; transform: translateX(-50%); color: var(--teal); }
.ax-dk.bottom { bottom: 12px; left: 50%; transform: translateX(-50%); color: var(--red); }
.ax-dk.left { left: 12px; top: 50%; transform: translateY(-50%) rotate(-90deg); color: var(--red); }
.ax-dk.right { right: 12px; top: 50%; transform: translateY(-50%) rotate(90deg); color: var(--teal); }
.ql-dk {
  position: absolute;
  font-size: 11px;
  color: var(--g2);
  font-weight: 300;
  line-height: 1.45;
  opacity: 0.7;
  max-width: 200px;
  z-index: 2;
}
.ql-dk-title { font-weight: 500; color: var(--g1); }
.logo-dot {
  position: absolute;
  transition: all 0.3s ease;
  cursor: default;
}
.logo-dot:hover { z-index: 100 !important; }
.logo-dot:hover .logo-tooltip { opacity: 1; }
.logo-tooltip {
  pointer-events: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid var(--ln2);
  background: var(--card);
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 400;
  color: var(--g1);
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
  opacity: 0;
  transition: opacity 0.2s;
  width: max(200px, min(280px, 90vw));
  z-index: 1;
}
.logo-tooltip.tooltip-below {
  bottom: auto;
  top: 100%;
  margin-bottom: 0;
  margin-top: 8px;
}
.logo-tooltip.tooltip-anchor-left {
  left: -10px;
  right: auto;
  transform: none;
}
.logo-tooltip.tooltip-anchor-right {
  left: auto;
  right: -10px;
  transform: none;
}
.logo-tooltip-name { font-weight: 600; color: var(--w); margin-bottom: 4px; font-size: 13px; }
.logo-tooltip-desc { white-space: normal; line-height: 1.5; }
.logo-tooltip-arrow {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--card);
}
.tooltip-below .logo-tooltip-arrow {
  top: auto;
  bottom: 100%;
  border-top-color: transparent;
  border-bottom-color: var(--card);
}
.tooltip-anchor-left .logo-tooltip-arrow { left: 20px; }
.tooltip-anchor-right .logo-tooltip-arrow { left: auto; right: 20px; }
.logo-img-wrap { position: relative; }
.logo-cm { width: 120px; height: 60px; }
.logo-agrippa { width: 72px; height: 36px; }
.logo-std { width: 52px; height: 26px; }
.logo-dot:hover .logo-img-wrap { transform: scale(1.1); transition: transform 0.2s; }
.cm-shadow { filter: drop-shadow(0 4px 12px rgba(43,138,255,.25)); }
.cm-ring {
  position: absolute;
  inset: -6px;
  border-radius: 12px;
  border: 2px solid var(--blue);
  animation: pulse-ring-dk 2s ease-in-out infinite;
}

.comp-details { display: flex; flex-direction: column; gap: 0; }
.comp-details-header {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-bottom: 6px;
}
.comp-details-header em { font-style: italic; color: var(--blue); }
.comp-details-sub {
  font-size: 16px;
  color: var(--g2);
  font-weight: 300;
  line-height: 1.65;
  margin-bottom: 16px;
}
.comp-details-sub b { color: var(--blue); font-weight: 400; }
table.comp-table { width: 100%; border-collapse: collapse; }
table.comp-table th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--g3);
  font-weight: 400;
  text-align: left;
  padding: 6px 10px;
  border-bottom: 1px solid var(--ln2);
  background: var(--s1);
}
table.comp-table td {
  padding: 7px 12px;
  font-size: 14px;
  color: var(--g2);
  font-weight: 300;
  border-bottom: 1px solid var(--ln);
  vertical-align: top;
  line-height: 1.5;
}
table.comp-table tr:last-child td { border-bottom: none; }
table.comp-table tr.hl td { color: var(--blue); font-weight: 500; background: var(--bbg); }
table.comp-table td:last-child { font-size: 13px; color: var(--g2); }

.raise-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 18px 0;
  border-top: 2px solid var(--blue);
  border-bottom: 1px solid var(--ln);
  margin-bottom: 14px;
}
.raise-bar .pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid var(--ln2);
  color: var(--g2);
  letter-spacing: 0.3px;
}
.raise-bar .pill.on { border-color: var(--bd); color: var(--blue); background: var(--bbg); }
.pill-sub {
  display: block;
  font-size: 9px;
  font-weight: 300;
  color: var(--g3);
  margin-top: 3px;
  letter-spacing: 0;
  text-transform: none;
}
.raise-statement {
  text-align: center;
  padding: 0 0 12px;
  font-size: 17px;
  color: var(--g2);
  font-weight: 300;
}
.raise-statement strong { color: var(--w); font-weight: 600; }
.raise-statement b { color: var(--blue); font-weight: 400; }

.ft { padding: 14px 0 24px; display: flex; justify-content: space-between; }
.ft span { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--g3); opacity: 0.55; }

.source { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--g2); opacity: 0.7; padding: 6px 0; }
.chart-total { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--g2); padding: 12px 0 4px; border-top: 1px solid var(--ln); margin-top: 8px; }
.chart-total b { color: var(--gold); font-weight: 500; }

.kpi-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--ln);
  border: 1px solid var(--ln);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
}
.ks-item { background: var(--s1); padding: 16px 18px; text-align: center; }
.ks-val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 5px;
}
.ks-val.blue { color: var(--blue); }
.ks-val.gold { color: var(--gold); }
.ks-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--g2);
}
.ks-src {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: var(--g3);
  margin-top: 4px;
  opacity: 0.7;
}

/* ── TABLET ── */
@media (max-width: 880px) {
  .report { padding: 0 32px; }
  .exec-grid { grid-template-columns: 1fr; }
  .comp-grid { grid-template-columns: 1fr; }
  .comp-map { min-height: 420px; aspect-ratio: auto; }
  .comp-map-logos { min-height: 420px; aspect-ratio: auto; }
}

/* ── MOBILE ── */
@media (max-width: 614px) {
  .deck-shell { font-size: 15px; }
  .report { padding: 0 18px; }

  /* Masthead */
  .masthead {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 24px 0 18px;
  }
  .masthead-left h1 { font-size: 32px; }
  .masthead-left img { height: 36px; }
  .masthead-sub { font-size: 14px; }
  .masthead-right { gap: 20px; flex-wrap: wrap; }
  .mstat-val { font-size: 24px; }
  .mstat-label { font-size: 9px; }

  /* Section headings */
  .sec-label { font-size: 20px; padding: 24px 0 10px; margin-bottom: 16px; }

  /* KPI strip */
  .kpi-strip { grid-template-columns: repeat(2, 1fr); }
  .ks-item { padding: 12px 10px; }
  .ks-val { font-size: 20px; }
  .ks-label { font-size: 9px; }

  /* Executive grid */
  .exec-grid { grid-template-columns: 1fr; gap: 24px; }
  .exec-narrative .thesis { font-size: 20px; }
  .exec-narrative p { font-size: 15px; }
  .traction-row { grid-template-columns: 1fr !important; gap: 8px !important; }
  .tc-val { font-size: 22px; }
  .tc-title { font-size: 14px; }
  .tc-desc { font-size: 13px; }

  /* Team */
  .team-layout { grid-template-columns: 1fr; gap: 0; }
  .tm-name { font-size: 14px; }
  .tm-bio { font-size: 13px; }
  .team-footer { font-size: 13px; }

  /* Problem */
  .problem-grid { grid-template-columns: 1fr; gap: 16px; }
  .problem-quote { font-size: 20px; padding-left: 16px; }
  .problem-desc { font-size: 14px; }
  table.pain-table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  table.pain-table th { font-size: 10px; padding: 8px 12px; white-space: nowrap; }
  table.pain-table td { font-size: 13px; padding: 8px 12px; min-width: 140px; }

  /* Why Now */
  .whynow-grid { grid-template-columns: 1fr; gap: 20px; }
  .chart-container { padding: 18px 16px 14px; }
  .chart-title { font-size: 18px; }
  .chart-subtitle { font-size: 12px; }
  .hbar-row { grid-template-columns: 50px 1fr 52px; gap: 8px; margin-bottom: 6px; }
  .hbar-year { font-size: 12px; }
  .hbar-track { height: 22px; }
  .hbar-val { font-size: 12px; }
  .catalyst { padding: 14px 16px; }
  .catalyst-val { font-size: 20px; }
  .catalyst-title { font-size: 14px; }
  .catalyst-desc { font-size: 13px; }

  /* GTM table */
  table.gtm-table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  table.gtm-table th { font-size: 10px; padding: 8px 12px; white-space: nowrap; }
  table.gtm-table td { font-size: 14px; padding: 10px 12px; min-width: 120px; }
  table.gtm-table td:nth-child(2) { min-width: 180px; }
  table.gtm-table td:nth-child(3) { min-width: 240px; }

  /* Competitive */
  .comp-grid { grid-template-columns: 1fr; gap: 20px; }
  .comp-map { min-height: 320px; aspect-ratio: auto; }
  .comp-map-logos { min-height: 320px; aspect-ratio: auto; }
  .logo-cm { width: 80px; height: 40px; }
  .logo-agrippa { width: 52px; height: 26px; }
  .logo-std { width: 36px; height: 18px; }
  .ql-dk { font-size: 9px; max-width: 140px; }
  .ax-dk { font-size: 8px; }
  .cdot { font-size: 9px; padding: 3px 7px; }
  .cdot.cm { font-size: 11px; padding: 5px 10px; }
  .qlabel { font-size: 9px; max-width: 140px; }
  .ax { font-size: 8px; }
  .comp-details-header { font-size: 18px; }
  .comp-details-sub { font-size: 14px; }
  table.comp-table th { font-size: 9px; padding: 5px 8px; }
  table.comp-table td { font-size: 12px; padding: 5px 8px; }
  table.comp-table td:last-child { font-size: 11px; }

  /* Fundraise */
  .raise-statement { font-size: 15px; }
  .raise-bar { flex-wrap: wrap; gap: 8px; padding: 14px 0; }
  .raise-bar .pill { font-size: 11px; padding: 6px 14px; }

  /* Footer */
  .ft { flex-direction: column; gap: 4px; padding: 12px 0 20px; }
  .ft span { font-size: 9px; }
}

/* ── SMALL PHONES ── */
@media (max-width: 320px) {
  .report { padding: 0 14px; }
  .masthead-left h1 { font-size: 28px; }
  .masthead-left img { height: 28px; }
  .kpi-strip { grid-template-columns: 1fr 1fr; }
  .ks-val { font-size: 18px; }
  .sec-label { font-size: 18px; }
  .comp-map { min-height: 280px; }
  .comp-map-logos { min-height: 280px; }
  .logo-cm { width: 64px; height: 32px; }
  .logo-agrippa { width: 40px; height: 20px; }
  .logo-std { width: 28px; height: 14px; }
  .cdot { font-size: 8px; padding: 2px 5px; }
  .cdot.cm { font-size: 10px; padding: 4px 8px; }
}
`,
        }}
      />

      <div className="deck-shell">
        <div className="report">

          {/* MASTHEAD */}
          <header className="masthead">
            <div className="masthead-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/CapMatchLogo.png" alt="CapMatch" style={{ height: '48px', objectFit: 'contain' }} />
                <h1>Cap<em>Match</em></h1>
              </div>
              <div className="masthead-sub">The Operating System for CRE Debt</div>
            </div>
            <div className="masthead-right">
              <div className="mstat"><div className="mstat-val gold">$2.0T</div><div className="mstat-label">Maturing 2026–28</div></div>
              <div className="mstat"><div className="mstat-val blue">$875B</div><div className="mstat-label">Due This Year</div></div>
            </div>
          </header>

          {/* MARKET KPIs */}
          <div className="sec-label">Market <em>Snapshot</em></div>
          <div className="kpi-strip">
            <div className="ks-item"><div className="ks-val gold">$2.0T</div><div className="ks-label">Loans Maturing 2026–28</div><div className="ks-src">MBA, March 2026</div></div>
            <div className="ks-item"><div className="ks-val blue">+67%</div><div className="ks-label">Lending Momentum YoY</div><div className="ks-src">CBRE, Q4 2025</div></div>
            <div className="ks-item"><div className="ks-val gold">40%</div><div className="ks-label">Non-Bank Lending Share</div><div className="ks-src">CBRE, Q4 2025 — debt funds, mREITs &amp; alt. lenders</div></div>
            <div className="ks-item"><div className="ks-val blue">$350B+</div><div className="ks-label">Dry Powder in CRE</div><div className="ks-src">Preqin, Mid-2025</div></div>
          </div>

          {/* EXECUTIVE SUMMARY */}
          <div className="sec-label">Executive <em>Summary</em></div>
          <div className="exec-grid">
            <div className="exec-narrative">
              <div className="thesis">Vertical AI platform for CRE debt — compensated on <em>performance</em>, not SaaS fees.</div>
              <p>CapMatch earns revenue only when deals close — aligning our incentives with every borrower, broker, and lender on the platform. In less than six months of operations, we have onboarded <strong>4 brokerage firms</strong>, are actively processing <strong>7 projects</strong> representing <strong>$291M</strong> in deal volume, and assembled a leadership team with <strong>50+ years</strong> of combined experience across CBRE, Northmarq, Greystone, and multiple successful exits.</p>
            </div>
            <div className="traction-row" style={{ gridTemplateColumns: '1fr 1fr 1fr', alignSelf: 'start' }}>
              <div className="traction-card">
                <div className="tc-val blue">4</div>
                <div className="tc-title">Brokerages</div>
                <div className="tc-desc">Providing recurring deal flow</div>
              </div>
              <div className="traction-card">
                <div className="tc-val blue">7</div>
                <div className="tc-title">Active Projects</div>
                <div className="tc-desc">$291M in pipeline volume</div>
              </div>
              <div className="traction-card">
                <div className="tc-val gold">50+</div>
                <div className="tc-title">Years Combined</div>
                <div className="tc-desc">CRE &amp; tech leadership experience</div>
              </div>
            </div>
          </div>

          {/* LEADERSHIP TEAM */}
          <div className="sec-label">Leadership <em>Team</em></div>
          <div className="team-layout">
            <table className="team-table">
              <thead><tr><th>Name / Role</th><th>Background</th></tr></thead>
              <tbody>
                <tr>
                  <td><div className="tm-name">Dr. Jeff Richmond</div><div className="tm-role">CEO</div></td>
                  <td><div className="tm-bio">Built / led $2B+ annual real estate org. High-performance leadership consultant.</div></td>
                </tr>
                <tr>
                  <td><div className="tm-name">Todd Vitzthum</div><div className="tm-role">Strategy / RE</div></td>
                  <td><div className="tm-bio">Former leadership Greystone, C&amp;W, CBRE. 20+ yrs corporate CRE.</div></td>
                </tr>
                <tr>
                  <td><div className="tm-name">Michael Krueger</div><div className="tm-role">Legal</div></td>
                  <td><div className="tm-bio">Partner, Lucosky Brookman. Corporate / securities attorney.</div></td>
                </tr>
              </tbody>
            </table>
            <div>
              <table className="team-table">
                <thead><tr><th>Name / Role</th><th>Background</th></tr></thead>
                <tbody>
                  <tr>
                    <td><div className="tm-name">Param Vora</div><div className="tm-role">COO / CTO</div></td>
                    <td><div className="tm-bio">10+ yrs AI/ML (Masters). Led AI at fastest growing US media co. Recent exit.</div></td>
                  </tr>
                  <tr>
                    <td><div className="tm-name">Greg Kapust</div><div className="tm-role">Finance</div></td>
                    <td><div className="tm-bio">4 exits, 3 &gt; $100M+. Active RE investor.</div></td>
                  </tr>
                </tbody>
              </table>
              <div className="team-footer">
                <strong>Team of repeat founders</strong> with experience across <b>CBRE</b>, <b>Northmarq</b>, <b>Greystone</b>, <b>EXP</b>, <b>TCD</b>, <b>Lucosky Brookman</b>, <b>IIT Madras</b>, and <b>TU Munich</b>. 50+ years combined experience in real estate &amp; technology. The entire engineering team are at least 1x-founders.
              </div>
            </div>
          </div>

          {/* MARKET PROBLEM */}
          <div className="sec-label">Market <em>Problem</em></div>
          <div className="problem-grid">
            <div className="problem-quote">A trillion-dollar market <em>still</em> runs on email, PDFs, and relationships.</div>
            <div>
              <p className="problem-desc">The CRE debt market is a bottom-up system that fragments outcomes for every participant — borrowers, advisors, and lenders alike.</p>
              <table className="pain-table">
                <thead>
                  <tr><th>Borrowers</th><th>Debt Advisory</th><th>Lenders</th></tr>
                </thead>
                <tbody>
                  <tr><td>Hard to compare lenders</td><td>Limited origination pipelines</td><td>Hard to optimize deal flow</td></tr>
                  <tr><td>Limited discovery tools</td><td>Inefficient support processes</td><td>Unreliable data</td></tr>
                  <tr><td>Lack of process transparency</td><td>Scattered communication</td><td>Manual screening</td></tr>
                  <tr><td>Time inefficiencies</td><td>Repetitive work</td><td>Low standardization</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* WHY NOW */}
          <div className="sec-label">Why <em>Now</em> — The Maturity Wall</div>
          <div className="whynow-grid">
            <div className="chart-container">
              <div className="chart-title">The <em>maturity wall</em> is here</div>
              <div className="chart-subtitle">CRE loan maturities — <b>$2.5T</b> must refinance 2026–2028</div>
              {/* Bar widths scaled proportionally: $957B is peak = 100% */}
              <div className="hbar-row">
                <div className="hbar-year">2024</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '97%', background: 'linear-gradient(90deg,#475569,#334155)' }} /></div>
                <div className="hbar-val">$929B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year">2025</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '100%', background: 'linear-gradient(90deg,#475569,#334155)' }} /></div>
                <div className="hbar-val">$957B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year now">2026 ←</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '91%', background: 'linear-gradient(90deg,var(--gold),#D97706)' }} /></div>
                <div className="hbar-val">$875B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year now">2027</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '68%', background: 'linear-gradient(90deg,var(--gold),#D97706)' }} /></div>
                <div className="hbar-val">$652B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year now">2028</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '53%', background: 'linear-gradient(90deg,var(--gold),#D97706)' }} /></div>
                <div className="hbar-val">~$500B</div>
              </div>
              <div className="chart-total">2026–2028 refinancing window: <b>~$2.0T</b> of $5.0T outstanding</div>
              <div className="source">Source: MBA CREF Survey of Loan Maturity Volumes (Feb 2025 &amp; March 2026). 2028 est. based on MBA &amp; Trepp projections.</div>
            </div>
            <div className="catalyst-stack">
              <div className="catalyst">
                <div className="catalyst-val">$2.0T</div>
                <div className="catalyst-title">Maturity wall peaks now</div>
                <div className="catalyst-desc">~$2T in CRE mortgages must refinance 2026–2028 — borrowers need lender options fast, not broker phone-tag.</div>
                <div className="source">MBA, March 2026</div>
              </div>
              <div className="catalyst">
                <div className="catalyst-val">40%</div>
                <div className="catalyst-title">Capital sources fragmenting</div>
                <div className="catalyst-desc">Alternative lenders captured 40% of non-agency loan closings in Q4 2025, nearly doubling their share from a year ago. Banks, life cos, CMBS, debt funds — impossible to navigate manually.</div>
                <div className="source">CBRE U.S. Capital Markets, Q4 2025</div>
              </div>
              <div className="catalyst">
                <div className="catalyst-val">+67%</div>
                <div className="catalyst-title">Lending momentum surging</div>
                <div className="catalyst-desc">CBRE Lending Momentum Index up 67% YoY, reaching levels comparable to 2018. $350B+ in dry powder seeking deployment.</div>
                <div className="source">CBRE, Q4 2025 &middot; Preqin, Mid-2025</div>
              </div>
            </div>
          </div>

          {/* GO-TO-MARKET */}
          <div className="sec-label">Go-to-Market <em>Strategy</em></div>
          <table className="gtm-table">
            <thead>
              <tr><th>#</th><th>Channel</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Broker Network Activation<span className="gtm-tag">Brokers bring deals</span></td>
                <td>Activate CRE investment sales brokers (~111k licensed brokers in the U.S., BLS 2024) to place debt on existing client relationships. CRE brokers increase annual income without additional work.</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Direct Borrower Acquisition<span className="gtm-tag">Proactive outreach</span></td>
                <td>Leverage proprietary database of ~29k multifamily owners (CapMatch internal data). Brand building, free-use tools, and educational content to incentivize direct lender access.</td>
              </tr>
              <tr>
                <td>03</td>
                <td>Refinance Radar<span className="gtm-tag">Reverse prospecting</span></td>
                <td>Quant engine continuously monitors loan maturities and evolving market conditions. Conduct proprietary borrower outreach using indicative (&apos;soft&apos;) lender term sheets.</td>
              </tr>
            </tbody>
          </table>

          {/* COMPETITIVE POSITIONING */}
          <div className="sec-label">Competitive <em>Positioning</em></div>
          <div className="comp-section">
            <div className="comp-grid">
              <CompetitiveAnalysisGraphDeck />

              <div className="comp-details">
                <div className="comp-details-header"><b>Unified</b> operating system, <em>performance</em>-compensated</div>
                <p className="comp-details-sub">CapMatch sits alone in the <b>AI + Platform</b> quadrant — the only end-to-end CRE debt OS compensated on deal performance rather than SaaS fees.</p>
                <table className="comp-table">
                  <thead><tr><th>Quadrant</th><th>Players</th><th>Type</th></tr></thead>
                  <tbody>
                    <tr className="hl"><td>AI + Platform</td><td>CapMatch</td><td>End-to-end CRE debt OS</td></tr>
                    <tr><td>AI + Platform</td><td>Agrippa</td><td>AI-driven capital matching</td></tr>
                    <tr><td>AI + Tool</td><td>Henry AI, Bryckel, Cadastral, APERS</td><td>AI agents &amp; workflow tools</td></tr>
                    <tr><td>Mid-zone</td><td>CompStak, Lev, StackSource, CrowdStreet</td><td>Data analytics &amp; fintech</td></tr>
                    <tr><td>Manual + Tool</td><td>VTS, Buildout, RCM, LoopNet</td><td>Databases &amp; listing services</td></tr>
                    <tr><td>Manual + Platform</td><td>JLL, CBRE, Cushman, Northmarq, Finance Lobby</td><td>Brokerages &amp; marketplaces</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FUNDRAISE */}
          <div className="sec-label"><em>Investment</em></div>
          <div className="raise-statement"><b>Bootstrapped</b> to date. Raising <strong>$2M</strong> in pre-seed / seed round from strategic partners with industry knowledge &amp; connections.</div>
          <div className="raise-bar">
            <span className="pill on">Bootstrapped<span className="pill-sub">Built to $291M pipeline with zero funding</span></span>
            <span className="pill on">$291M Pipeline<span className="pill-sub">7 active deals across 4 brokerage partners</span></span>
            <span className="pill">Performance Revenue<span className="pill-sub">First closed deal triggers revenue</span></span>
            <span className="pill">$2M Raise<span className="pill-sub">Pre-seed round for engineering &amp; GTM</span></span>
            <span className="pill">Strategic Partners<span className="pill-sub">Industry LPs with deal flow &amp; domain expertise</span></span>
          </div>

          {/* FOOTER */}
          <div className="ft">
            <span>© Copyright 2026 CapMatch, Inc. All Rights Reserved.</span>
            <span>No unauthorized duplication, distribution or sale.</span>
          </div>

        </div>
      </div>
    </>
  );
}
