'use client';

import { useState, useCallback, useEffect } from 'react';
import { Eye, X } from 'lucide-react';

interface DocumentViewerProps {
  label: string;
  path: string;
}

export default function DocumentViewer({ label, path }: DocumentViewerProps) {
  const [open, setOpen] = useState(false);
  const ext = path.split('.').pop()?.toLowerCase();
  const isPdf = ext === 'pdf';
  const viewUrl = `/api/documents/view?path=${encodeURIComponent(path)}`;

  const preventAction = useCallback((e: Event) => {
    e.preventDefault();
    return false;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-md text-[13px] font-medium text-gray-700 transition-colors"
      >
        <Eye className="w-3.5 h-3.5 text-gray-400" />
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
              <span className="text-sm font-semibold text-gray-900">{label}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div
              className="flex-1 overflow-hidden select-none"
              onContextMenu={preventAction as unknown as React.MouseEventHandler}
              onDragStart={preventAction as unknown as React.DragEventHandler}
            >
              <iframe
                src={isPdf ? `${viewUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH` : viewUrl}
                className="w-full h-full border-0"
                title={label}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
