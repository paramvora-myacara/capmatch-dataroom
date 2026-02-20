# CapMatch Investor Data Room

Login-protected investor diligence workspace for CapMatch pre-seed/seed round. Built with Next.js 15.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and set:

```bash
# Required: 32+ character secret for session encryption
DATAROOM_SESSION_SECRET=your-secure-secret-min-32-chars

# Required: Comma-separated allowed investor emails (lowercase)
DATAROOM_ALLOWED_EMAILS=investor@fund.com,partner@vc.com

# Required: Shared password for data room access
DATAROOM_PASSWORD=your-password
```

### 3. Add documents

Place diligence documents in `public/dataroom/`:

- `pitch-deck.pdf`
- `cap-table.xlsx`
- `3yr-pnl.xlsx`
- Formation docs, contracts, etc.

Files are served at `/dataroom/filename` and are protected by auth.

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to `/login` until authenticated.

## Structure

| Route | Content |
|-------|---------|
| `/` | Read Me First — Index, Company Snapshot, Built vs In-Progress |
| `/company` | Pitch deck, product one-pager, demo video |
| `/product-tech` | Product + Tech Overview (single umbrella doc) |
| `/market-strategy` | Market + Strategy Brief |
| `/traction` | Traction Proof Pack |
| `/financials` | Financial Overview, burn, runway, P&L |
| `/corporate` | Formation, cap table, material contracts |
| `/ip-data` | IP assignment, OSS inventory, data rights |
| `/security` | Security, privacy, SOC2 roadmap |
| `/team` | Leadership, org chart, hiring plan |

## Auth

- Email allowlist + shared password
- Session stored in encrypted cookie (7-day expiry)
- Access logs: page views logged to console (Vercel function logs in production)

## Deploy on Vercel

1. Add env vars in Vercel project settings
2. Deploy. Documents in `public/dataroom/` are included in the build
