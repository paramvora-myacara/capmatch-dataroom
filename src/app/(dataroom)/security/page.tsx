import DocumentSection from '@/components/DocumentSection';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Security + Privacy + Compliance</h1>
      </header>
      
      <DocumentSection title="Security Overview">
        <p className="text-gray-700 text-sm mb-6">
          CapMatch implements security controls across the main platform (Frontend, Backend) and the investor data room. Below is a summary of what is in place today.
        </p>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">1. Authentication and access control</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4">
          <li><strong>Platform (main app):</strong> JWT-based authentication via Supabase. Backend validates tokens on each request, with a short-lived in-memory cache to reduce validation calls. Paths such as health checks, docs, webhooks (with signature verification), and invite/onboard flows are explicitly excluded where appropriate.</li>
          <li><strong>Data room:</strong> Email allowlist stored in Supabase; only listed emails can sign in. Admin manages the list at /admin. Session-based auth using a signed cookie (HMAC-SHA256, timing-safe comparison), 7-day expiry, and roles (viewer vs admin). Middleware protects all non-login routes and redirects unauthenticated users to login.</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">2. Network and transport</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4">
          <li><strong>CORS:</strong> Backend uses an allowlist of origins (no wildcard). Allowed methods and headers are restricted; credentials are enabled for frontend. Preflight cache set to 1 hour.</li>
          <li><strong>HTTPS:</strong> Production traffic is served over HTTPS (Vercel, GCP). HSTS can be enabled in production for the API.</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">3. Rate limiting and abuse prevention</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4">
          <li><strong>Backend:</strong> Rate limiting via SlowAPI with Redis when available (otherwise in-memory). Keyed by user ID when authenticated, otherwise by IP. Default global limit (e.g. 1000/hour); endpoints can set stricter limits. Responses include X-RateLimit-* and Retry-After headers. Rate-limit-exceeded events are logged.</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">4. Security headers and hardening</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4">
          <li><strong>Backend middleware:</strong> X-Content-Type-Options: nosniff; X-Frame-Options: DENY; X-XSS-Protection: 1; mode=block; Content-Security-Policy; Permissions-Policy (geolocation, microphone, camera, etc. restricted); Referrer-Policy: strict-origin-when-cross-origin; X-Request-ID on every response for tracing.</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">5. Logging and observability</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-4">
          <li><strong>Platform:</strong> Backend uses structured logging (e.g. Loguru). Auth and rate-limit events are logged. Prometheus /metrics endpoint for operational monitoring.</li>
          <li><strong>Data room:</strong> Activity log in Supabase for signup, login, and page_view events, with email and metadata (e.g. user agent). Logging can be extended for full audit trails.</li>
        </ul>

        <h4 className="font-semibold text-gray-900 mt-4 mb-2">6. Data and infrastructure</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
          <li>Application and auth data in Supabase (PostgreSQL, Auth, Storage) with access controlled by role and session. Data room documents in a dedicated storage bucket with access via signed URLs and session checks.</li>
          <li>Secrets (e.g. session signing, API keys) are environment-based and not committed; production uses secure secret management.</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="Road to SOC 2 Compliance">
        <p className="text-gray-700 text-sm mb-4">
          CapMatch is working toward SOC 2 Type I/II readiness to meet enterprise and institutional expectations. The roadmap below outlines current status and planned milestones. Target: complete readiness work and engage an auditor for a SOC 2 Type I examination within the planned window (e.g. 12–18 months from kickoff, depending on scope and auditor availability).
        </p>
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">Current status</span>
          </div>
          <ul className="px-4 py-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Security controls in place as described above (auth, CORS, rate limiting, security headers, logging).</li>
            <li>No formal information security or privacy policies yet; no dedicated incident response playbook.</li>
            <li>No formal change management or SDLC policy; code review and CI/CD in place.</li>
            <li>Vendor list (Supabase, Vercel, GCP, etc.) not yet documented for SOC 2 vendor criteria.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Planned milestones</h4>
          {[
            { phase: 'Policies and governance', items: ['Adopt information security policy and acceptable use policy.', 'Define privacy policy and data retention (and document in data room).', 'Assign security/privacy ownership and review cadence.'] },
            { phase: 'Access control and identity', items: ['Formalize user access lifecycle (provisioning, role changes, deprovisioning).', 'Document MFA and password/session standards; implement MFA where required.', 'Extend data room and platform audit logging for access and sensitive actions.'] },
            { phase: 'Change management and SDLC', items: ['Document change management and deployment process.', 'Codify secure SDLC (branching, review, testing, deployment) and keep evidence.'] },
            { phase: 'Monitoring and incident response', items: ['Define and document incident response process and escalation.', 'Ensure logging and alerting cover security-relevant events; retain logs per policy.', 'Schedule tabletop or walkthrough for key scenarios.'] },
            { phase: 'Vendor and risk', items: ['Maintain vendor list with critical services (Supabase, Vercel, GCP, etc.).', 'Review contracts and subprocessor documentation for privacy/security.', 'Assess and document vendor risk for in-scope services.'] },
            { phase: 'Audit readiness and examination', items: ['Compile evidence (policies, logs, screenshots, interviews) for trust criteria.', 'Select and engage a SOC 2 auditor; agree scope (Type I first, then Type II if desired).', 'Complete Type I audit and receive report; plan Type II if needed.'] },
          ].map(({ phase, items }) => (
            <div key={phase} className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 text-sm mb-2">{phase}</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs mt-4">
          SOC 2 is based on the AICPA Trust Service Criteria (Security, and optionally Availability, Processing Integrity, Confidentiality, Privacy). Timeline and scope may be adjusted as we prioritize and as counsel or auditors advise.
        </p>
      </DocumentSection>

      <DocumentSection title="Privacy">
        <p className="text-gray-500 text-sm">[Privacy policy and retention summary to be added; will be linked here when published.]</p>
      </DocumentSection>

      <DocumentSection title="Regulatory Posture">
        <p className="text-gray-500 text-sm">
          [One-page note: what we are/are not; where counsel is engaged. Topics: lending licensing (e.g. CFL), Fair Lending (ECOA), data privacy (GDPR/CCPA).]
        </p>
      </DocumentSection>

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">← Back to Index</Link>
      </p>
    </article>
  );
}
