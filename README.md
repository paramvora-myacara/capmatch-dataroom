# CapMatch Investor Data Room

Login-protected investor diligence workspace for CapMatch pre-seed/seed round. Built with Next.js 15 and Supabase (auth + activity tracking + storage).

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and set your Supabase credentials.

**Local development (Docker):**

1. Start Supabase locally: `npm run supabase:start` (or `npx supabase start`).
2. Get URL and keys: `npm run supabase:status` (or `npx supabase status`).
3. In `.env.local` set:
   - `NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key from status>`
   - `SUPABASE_SERVICE_ROLE_KEY=<service_role key from status>` (optional; for admin)

**Production:** Use your hosted Supabase project URL and anon key (and optionally service role key) from the [Supabase dashboard](https://supabase.com/dashboard).

### 3. Run migrations (local)

With Supabase running locally, migrations apply automatically on `supabase start`. To reset and re-run:

```bash
npx supabase db reset
```

### 4. Add documents

Place diligence documents in `public/dataroom/`:

- `pitch-deck.pdf`
- `cap-table.xlsx`
- etc.

Files are served at `/dataroom/filename` and are protected by auth.

### 5. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to `/login` until authenticated. Users can **sign up** or **sign in** with email and password.

## Structure

| Route | Content |
|-------|---------|
| `/` | Read Me First - Index, Company Snapshot, Built vs In-Progress |
| `/company` | Pitch deck, product one-pager, demo video |
| `/product-tech` | Product + Tech Overview |
| `/market-strategy` | Market + Strategy Brief |
| `/traction` | Traction Proof Pack |
| `/financials` | Financial Overview, burn, runway, P&L |
| `/corporate` | Formation, cap table, material contracts |
| `/ip-data` | IP assignment, OSS inventory, data rights |
| `/security` | Security, privacy, SOC2 roadmap |
| `/team` | Leadership, org chart, hiring plan |

## Auth & tracking

- **Auth:** Supabase Auth. Users sign up or sign in with email/password (no invite-only list).
- **Activity:** Signups, logins, and page views are stored in `public.activity_log` (see who signed up, who is logged in, and what they’re viewing).
- **Storage:** Private bucket `dataroom-documents` for uploaded files; RLS allows authenticated users to read/upload/update/delete.

## Local Supabase (Docker)

- Start: `npm run supabase:start`
- Stop: `npm run supabase:stop`
- Status (URL + keys): `npm run supabase:status`
- Studio UI: http://127.0.0.1:54323 (when running)

## Deploy on Vercel

1. Create a Supabase project at [supabase.com](https://supabase.com) and run the same migrations (e.g. link the project and run `supabase db push`, or apply the SQL in the Dashboard).
2. Add env vars in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and optionally `SUPABASE_SERVICE_ROLE_KEY`.
3. Deploy. Documents in `public/dataroom/` are included in the build.
