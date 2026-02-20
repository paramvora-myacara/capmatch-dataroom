/**
 * Access logging for data room. In production (Vercel), logs to console.
 * For local dev with persistent logs, set WRITE_ACCESS_LOGS_TO_FILE=true
 * and logs will be appended to .access-logs.json (gitignored).
 */

export interface AccessLogEntry {
  email: string;
  page: string;
  action: string;
  timestamp: string;
  userAgent?: string;
}

export function logAccess(entry: Omit<AccessLogEntry, 'timestamp'>): void {
  const fullEntry: AccessLogEntry = {
    ...entry,
    timestamp: new Date().toISOString(),
  };
  // Always log to console (appears in Vercel function logs)
  console.log('[DATAROOM_ACCESS]', JSON.stringify(fullEntry));
}
