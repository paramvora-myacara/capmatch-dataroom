'use client';

import DocumentViewer from './DocumentViewer';

interface DocumentSectionProps {
  title: string;
  children: React.ReactNode;
  documents?: { label: string; href: string }[];
}

function toStoragePath(href: string): string {
  return href.replace(/^\/dataroom\//, '');
}

export default function DocumentSection({ title, children, documents }: DocumentSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-200">{title}</h2>
      <div className="prose prose-gray max-w-none text-[15px]">{children}</div>
      {documents && documents.length > 0 && (
        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {documents.map((doc) => (
              <DocumentViewer
                key={doc.href}
                label={doc.label}
                path={toStoragePath(doc.href)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
