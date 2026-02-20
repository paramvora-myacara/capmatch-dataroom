'use client'

import { useState, useEffect } from 'react'

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    if (!isOpen) {
      setFullName('')
      setEmail('')
      setMessage('')
      setSubmitStatus(null)
      setIsSubmitting(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, message }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => { onClose() }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h2 className="text-lg font-semibold text-gray-900">Schedule a Meeting</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Thank you</h3>
              <p className="text-gray-500 text-sm">Your message has been sent. We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="you@firm.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[13px] font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="I'd like to discuss..."
                />
              </div>
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">An error occurred. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
