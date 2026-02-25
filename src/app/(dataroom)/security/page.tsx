import DocumentSection from '@/components/DocumentSection';
import SectionNav from '@/components/SectionNav';

export default function SecurityPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Security + Privacy + Compliance</h1>
      </header>
      
      <DocumentSection title="Security Overview">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Authentication, access control &amp; data</h4>
            <p className="text-gray-700 text-sm">JWT-based auth via Supabase for the platform; email-allowlist + signed-cookie sessions (HMAC-SHA256, 7-day expiry) for the data room. Admin-managed allowlist, middleware-protected routes. Supabase (PostgreSQL, Auth, Storage) with role-based access. Signed URLs for document delivery. Secrets are environment-based and not committed.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Network, transport &amp; infrastructure</h4>
            <p className="text-gray-700 text-sm">CORS allowlist (no wildcard), HTTPS in production (Vercel, GCP), restricted methods and headers. Rate limiting via SlowAPI with Redis, keyed by user ID or IP. Security headers: X-Content-Type-Options, X-Frame-Options, CSP, Permissions-Policy, Referrer-Policy, X-Request-ID.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Logging &amp; observability</h4>
            <p className="text-gray-700 text-sm">Structured logging, Prometheus metrics, and Supabase activity log tracking signups, logins, and page views.</p>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection title="SOC 2">
        <p className="text-gray-700 text-sm">
          CapMatch is working toward SOC 2 Type I/II readiness. Security controls (auth, CORS, rate limiting, headers, logging) are in place. We are formalizing policies, access lifecycle, change management, incident response, and vendor documentation, with a target to engage an auditor for a SOC 2 Type I examination within 12–18 months from kickoff.
        </p>
      </DocumentSection>

      <DocumentSection title="Privacy &amp; Regulatory">
        <p className="text-gray-500 text-sm">
          Privacy policy and regulatory posture (lending licensing, Fair Lending, GDPR/CCPA) will be documented and linked here when published.
        </p>
      </DocumentSection>

      <SectionNav />
    </article>
  );
}
