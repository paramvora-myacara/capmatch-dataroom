'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Upload, FileText, Download, Eye, X, Loader2 } from 'lucide-react';

const BUCKET = 'dataroom-documents';

type FileItem = {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  metadata?: { mimetype?: string };
};

export default function DocumentsPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [viewUrl, setViewUrl] = useState<string | null>(null);
  const [viewName, setViewName] = useState<string | null>(null);

  const supabase = createClient();

  const loadFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage.from(BUCKET).list('', {
      limit: 500,
      sortBy: { column: 'created_at', order: 'desc' },
    });
    if (error) {
      console.error(error);
      setFiles([]);
    } else {
      const raw = (data ?? []).filter((f) => f.name && !f.name.endsWith('/'));
      setFiles(raw as FileItem[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>('input[type="file"]');
    const file = input?.files?.[0];
    if (!file) return;
    setUploadError('');
    setUploading(true);
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });
    if (error) {
      setUploadError(error.message);
      setUploading(false);
      return;
    }
    setUploading(false);
    input.value = '';
    await loadFiles();
  };

  const handleView = async (path: string, name: string) => {
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
    if (error) {
      console.error(error);
      return;
    }
    if (data?.signedUrl) {
      setViewName(name);
      setViewUrl(data.signedUrl);
    }
  };

  const handleDownload = async (path: string, name: string) => {
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
    if (error) return;
    if (data?.signedUrl) {
      const a = document.createElement('a');
      a.href = data.signedUrl;
      a.download = name;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.click();
    }
  };

  const displayName = (name: string) => {
    const withoutTimestamp = name.replace(/^\d+-/, '');
    return withoutTimestamp || name;
  };

  const isPdf = (name: string) => /\.pdf$/i.test(name);

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Documents</h1>
        <p className="text-gray-500 text-sm mt-1">
          Upload and view documents. All users can see all documents in the data room.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Upload
        </h2>
        <form onSubmit={handleUpload} className="flex flex-wrap items-end gap-3">
          <label className="flex-1 min-w-[200px]">
            <span className="block text-[13px] font-medium text-gray-700 mb-1.5">Choose file</span>
            <input
              type="file"
              accept=".pdf,image/jpeg,image/png,image/webp,image/gif"
              className="block w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-gray-700 file:font-medium hover:file:bg-gray-200"
              disabled={uploading}
            />
          </label>
          <button
            type="submit"
            disabled={uploading}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Upload className="w-4 h-4" />
            )}
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
        {uploadError && (
          <p className="mt-2 text-sm text-red-600" role="alert">{uploadError}</p>
        )}
        <p className="mt-2 text-xs text-gray-500">
          Allowed: PDF, JPEG, PNG, WebP, GIF. Max 50 MB per file.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          All documents
        </h2>
        {loading ? (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </div>
        ) : files.length === 0 ? (
          <p className="text-gray-500 text-sm">No documents yet. Upload a file above.</p>
        ) : (
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-100">
            {files.map((file) => (
              <li
                key={file.id || file.name}
                className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-900 truncate" title={file.name}>
                    {displayName(file.name)}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {isPdf(file.name) && (
                    <button
                      type="button"
                      onClick={() => handleView(file.name, displayName(file.name))}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDownload(file.name, displayName(file.name))}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {viewUrl && viewName && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label="View document"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
            <span className="text-sm font-medium text-gray-900 truncate">{viewName}</span>
            <button
              type="button"
              onClick={() => { setViewUrl(null); setViewName(null); }}
              className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 min-h-0 p-4">
            <iframe
              src={viewUrl}
              title={viewName}
              className="w-full h-full rounded-md bg-white border border-gray-200"
            />
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline">
          ← Back to Index
        </Link>
      </p>
    </article>
  );
}
