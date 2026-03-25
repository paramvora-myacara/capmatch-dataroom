import type { Metadata } from 'next';

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
}
.masthead-left h1 em { font-style: italic; color: var(--blue); }
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
  color: var(--g3);
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
  color: var(--g3);
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
.chart-subtitle { font-size: 14px; color: var(--g3); font-weight: 300; margin-bottom: 20px; }
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
  opacity: 0.55;
  font-weight: 500;
}
.ax.top { top: 12px; left: 50%; transform: translateX(-50%); color: var(--teal); }
.ax.bottom { bottom: 12px; left: 50%; transform: translateX(-50%); color: var(--red); }
.ax.left { left: 12px; top: 50%; transform: translateY(-50%) rotate(-90deg); color: var(--red); }
.ax.right { right: 12px; top: 50%; transform: translateY(-50%) rotate(90deg); color: var(--teal); }
.qlabel {
  position: absolute;
  font-size: 11px;
  color: var(--g3);
  font-weight: 300;
  line-height: 1.45;
  opacity: 0.45;
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
table.comp-table td:last-child { font-size: 13px; color: var(--g3); }

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
.ft span { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--g3); opacity: 0.35; }

.source { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--g3); opacity: 0.5; padding: 6px 0; }

.kpi-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  color: var(--g3);
}

@media (max-width: 960px) {
  .report { padding: 0 24px; }
  .masthead { flex-direction: column; align-items: flex-start; gap: 16px; }
  .masthead-right { gap: 20px; }
  .exec-grid, .team-layout, .problem-grid, .whynow-grid, .comp-grid {
    grid-template-columns: 1fr;
  }
  .traction-row { grid-template-columns: 1fr !important; }
  .kpi-strip { grid-template-columns: repeat(3, 1fr); }
  .comp-map { min-height: 360px; }
}
`,
        }}
      />

      <div className="deck-shell">
        <div className="report">

          {/* MASTHEAD */}
          <header className="masthead">
            <div className="masthead-left">
              <h1>Cap<em>Match</em></h1>
              <div className="masthead-sub">The Operating System for CRE Debt</div>
            </div>
            <div className="masthead-right">
              <div className="mstat"><div className="mstat-val gold">$4.8T</div><div className="mstat-label">TAM</div></div>
              <div className="mstat"><div className="mstat-val gold">$957B</div><div className="mstat-label">SAM</div></div>
              <div className="mstat"><div className="mstat-val">~100k</div><div className="mstat-label">Broker Network</div></div>
            </div>
          </header>

          <div className="datebar">
            <span>March 2026 &nbsp;&middot;&nbsp; Company Brief</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span className="tag">Pre-Seed</span>
              <span className="tag">Bootstrapped</span>
            </div>
          </div>

          {/* MARKET KPIs */}
          <div className="sec-label">Market <em>Snapshot</em></div>
          <div className="kpi-strip">
            <div className="ks-item"><div className="ks-val blue">$291M</div><div className="ks-label">Pipeline Volume</div></div>
            <div className="ks-item"><div className="ks-val gold">$2.1T</div><div className="ks-label">Maturing 2025–28</div></div>
            <div className="ks-item"><div className="ks-val blue">+112%</div><div className="ks-label">Originations YoY</div></div>
            <div className="ks-item"><div className="ks-val gold">37%</div><div className="ks-label">Private Credit Share</div></div>
            <div className="ks-item"><div className="ks-val blue">$585B</div><div className="ks-label">CRE Dry Powder</div></div>
          </div>

          {/* EXECUTIVE SUMMARY */}
          <div className="sec-label">Executive <em>Summary</em></div>
          <div className="exec-grid">
            <div className="exec-narrative">
              <div className="thesis">Vertical AI platform for borrowers and lenders with a deep-quant <em>matchmaking engine</em> — compensated on performance, not SaaS fees.</div>
              <p>CapMatch is building the operating system for CRE debt — connecting borrowers, debt advisors, and lenders through an AI-driven platform that replaces the fragmented, relationship-dependent workflows that dominate the <strong>$4.8 trillion</strong> commercial real estate debt market.</p>
            </div>
            <div className="traction-row" style={{ gridTemplateColumns: '1fr 1fr 1fr', alignSelf: 'start' }}>
              <div className="traction-card">
                <div className="tc-val blue">4</div>
                <div className="tc-title">Brokerages</div>
                <div className="tc-desc">Already providing recurring deal flow</div>
              </div>
              <div className="traction-card">
                <div className="tc-val blue">7</div>
                <div className="tc-title">Active Projects</div>
                <div className="tc-desc">Currently in loan processing</div>
              </div>
              <div className="traction-card">
                <div className="tc-val gold">$2M</div>
                <div className="tc-title">Pre-Seed Round</div>
                <div className="tc-desc">Strategic partners with industry knowledge</div>
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
              <div className="chart-subtitle">CRE loan maturities (billions USD) — <b>$2.1T</b> must refinance by 2028</div>
              <div className="hbar-row">
                <div className="hbar-year">2024</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '36%', background: 'linear-gradient(90deg,#475569,#334155)' }} /></div>
                <div className="hbar-val">$550B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year">2025</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '62%', background: 'linear-gradient(90deg,var(--red),#B91C1C)' }} /></div>
                <div className="hbar-val">$957B</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year now">2026 ←</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '75%', background: 'linear-gradient(90deg,var(--gold),#D97706)' }} /></div>
                <div className="hbar-val">$1.15T</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year now">2027</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '82%', background: 'linear-gradient(90deg,var(--gold),#D97706)' }} /></div>
                <div className="hbar-val">$1.26T</div>
              </div>
              <div className="hbar-row">
                <div className="hbar-year">2028</div>
                <div className="hbar-track"><div className="hbar-fill" style={{ width: '74%', background: 'linear-gradient(90deg,#475569,#334155)' }} /></div>
                <div className="hbar-val">$1.14T</div>
              </div>
              <div className="source">* Sources: MBA, S&amp;P Global, CBRE, CoStar, Deloitte 2026 CRE Outlook</div>
            </div>
            <div className="catalyst-stack">
              <div className="catalyst">
                <div className="catalyst-val">$2.1T</div>
                <div className="catalyst-title">Maturity wall peaks now</div>
                <div className="catalyst-desc">CRE loans must refinance 2025–2028. Borrowers need lender options fast — not broker phone-tag.</div>
              </div>
              <div className="catalyst">
                <div className="catalyst-val">37%</div>
                <div className="catalyst-title">Capital sources fragmenting</div>
                <div className="catalyst-desc">Private credit hit 37% of closings (vs 14% 10-yr avg). Banks, life cos, CMBS, debt funds — impossible to navigate manually.</div>
              </div>
              <div className="catalyst">
                <div className="catalyst-val">+112%</div>
                <div className="catalyst-title">Originations surging</div>
                <div className="catalyst-desc">Lending up 112% YoY per CBRE (Q3 &apos;25). $585B dry powder seeking deployment. Transaction volume at 2018 highs.</div>
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
                <td>Activate CRE investment sales brokers (~100k) to place debt on existing client relationships. CRE brokers increase annual income without additional work.</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Direct Borrower Acquisition<span className="gtm-tag">Proactive outreach</span></td>
                <td>Leverage owned database of ~29k multifamily owners. Brand building, free-use tools, and educational content to incentivize direct lender access.</td>
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
              <div className="comp-map">
                <span className="ax top">AI-Driven</span>
                <span className="ax bottom">Manual</span>
                <span className="ax left">Tool Based</span>
                <span className="ax right">Platform</span>

                <div className="qlabel" style={{ top: 20, left: 20 }}>SaaS tools or AI agents embedding into existing workflows</div>
                <div className="qlabel" style={{ top: 20, right: 20, textAlign: 'right' }}>Full end-to-end platforms</div>
                <div className="qlabel" style={{ bottom: 20, left: 20 }}>Traditional databases, listing services, spreadsheets</div>
                <div className="qlabel" style={{ bottom: 20, right: 20, textAlign: 'right' }}>Integrated marketplaces, manual coordination</div>

                <div className="cdot cm" style={{ top: '9%', right: '9%' }}>CapMatch</div>
                <div className="cdot" style={{ top: '14%', right: '22%' }}>Agrippa</div>
                <div className="cdot" style={{ top: '9%', left: '28%' }}>Henry AI</div>
                <div className="cdot" style={{ top: '12%', left: '10%' }}>Bryckel</div>
                <div className="cdot" style={{ top: '20%', left: '22%' }}>Cadastral</div>
                <div className="cdot" style={{ top: '24%', left: '38%' }}>APERS</div>
                <div className="cdot" style={{ top: '38%', left: '28%' }}>CompStak</div>
                <div className="cdot" style={{ top: '42%', right: '30%' }}>Lev</div>
                <div className="cdot" style={{ top: '38%', right: '14%' }}>StackSource</div>
                <div className="cdot" style={{ top: '42%', left: '42%' }}>CrowdStreet</div>
                <div className="cdot" style={{ bottom: '24%', left: '22%' }}>VTS</div>
                <div className="cdot" style={{ bottom: '18%', left: '8%' }}>Buildout</div>
                <div className="cdot" style={{ bottom: '32%', left: '14%' }}>RCM</div>
                <div className="cdot" style={{ bottom: '12%', left: '30%' }}>LoopNet</div>
                <div className="cdot" style={{ bottom: '14%', right: '10%' }}>JLL</div>
                <div className="cdot" style={{ bottom: '22%', right: '24%' }}>CBRE</div>
                <div className="cdot" style={{ bottom: '26%', right: '8%' }}>Cushman</div>
                <div className="cdot" style={{ bottom: '20%', right: '36%' }}>Finance Lobby</div>
                <div className="cdot" style={{ bottom: '30%', right: '20%' }}>Northmarq</div>
              </div>

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
            <span className="pill on">Bootstrapped</span>
            <span className="pill on">$291M Pipeline</span>
            <span className="pill">Performance Revenue</span>
            <span className="pill">$2M Raise</span>
            <span className="pill">Strategic Partners</span>
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
