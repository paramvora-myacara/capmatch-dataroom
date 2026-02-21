'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogOut, Mail, Plus, Trash2, FileText } from 'lucide-react';

export default function AdminPage() {
  const [emails, setEmails] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [addEmail, setAddEmail] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const [removing, setRemoving] = useState<string | null>(null);

  const loadEmails = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/allowed-emails');
      if (!res.ok) {
        setEmails([]);
        return;
      }
      const data = await res.json();
      setEmails(data.emails ?? []);
    } catch {
      setEmails([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmails();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = addEmail.trim().toLowerCase();
    if (!email) return;
    setAddError('');
    setAdding(true);
    try {
      const res = await fetch('/api/admin/allowed-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setAddError(data.error || 'Failed to add email');
        return;
      }
      setAddEmail('');
      await loadEmails();
    } finally {
      setAdding(false);
    }
  };

  const handleRemove = async (email: string) => {
    setRemoving(email);
    try {
      const res = await fetch(
        `/api/admin/allowed-emails?email=${encodeURIComponent(email)}`,
        { method: 'DELETE' }
      );
      if (res.ok) await loadEmails();
    } finally {
      setRemoving(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/dataroom-logout', { method: 'POST' });
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/CapMatchLogo.png" alt="CapMatch" width={32} height={32} unoptimized />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Admin</h1>
            <p className="text-xs text-gray-500">Manage data room access</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <FileText className="w-4 h-4" />
            Data room
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Allowed emails
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Only these emails can sign in to the data room (with the shared password).
          </p>

          <form onSubmit={handleAdd} className="flex flex-wrap gap-2 mb-6">
            <input
              type="email"
              value={addEmail}
              onChange={(e) => setAddEmail(e.target.value)}
              placeholder="investor@firm.com"
              className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              disabled={adding}
            />
            <button
              type="submit"
              disabled={adding || !addEmail.trim()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
              {adding ? 'Adding...' : 'Add'}
            </button>
          </form>
          {addError && (
            <p className="mb-4 text-sm text-red-600" role="alert">{addError}</p>
          )}

          {loading ? (
            <p className="text-sm text-gray-500">Loading...</p>
          ) : emails.length === 0 ? (
            <p className="text-sm text-gray-500">No allowed emails yet. Add one above.</p>
          ) : (
            <ul className="border border-gray-200 rounded-md divide-y divide-gray-100">
              {emails.map((email) => (
                <li
                  key={email}
                  className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-900 truncate">{email}</span>
                  <button
                    type="button"
                    onClick={() => handleRemove(email)}
                    disabled={removing === email}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md disabled:opacity-50"
                    aria-label={`Remove ${email}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
