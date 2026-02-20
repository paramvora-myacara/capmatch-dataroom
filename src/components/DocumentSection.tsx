import { Download } from 'lucide-react';

interface DocumentSectionProps {
  title: string;
  children: React.ReactNode;
  documents?: { label: string; href: string }[];
}

export default function DocumentSection({ title, children, documents }: DocumentSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="prose prose-gray max-w-none text-[15px]">{children}</div>
      {documents && documents.length > 0 && (
        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {documents.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-md text-[13px] font-medium text-gray-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-gray-400" />
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
