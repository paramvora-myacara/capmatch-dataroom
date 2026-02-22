'use client'

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACTS = [
  { name: 'Dr. Jeff Richmond', title: 'Chief Executive Officer', email: 'jeff.richmond@capmatch.com' },
  { name: 'Param Vora', title: 'Chief Technology Officer & Chief Operating Officer', email: 'param.vora@capmatch.com' },
]

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/20 z-40 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="space-y-4">
            {CONTACTS.map(({ name, title, email }) => (
              <div key={email}>
                <p className="text-gray-900 text-sm font-medium">{name}</p>
                <p className="text-gray-500 text-xs mb-0.5">{title}</p>
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
