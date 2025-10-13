'use client'
import { useState, FormEvent } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  formType?: 'in-home' | 'general'
}

export default function ContactModal({ isOpen, onClose, formType = 'general' }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
        }, 5000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-2xl mb-4">
          {formType === 'in-home' ? 'Request In-Home Lessons' : 'Book Your Pre-Lesson Consultation'}
        </h3>

        {!isSuccess && (
          <div className="mb-4 p-4 bg-base-200 rounded-lg">
            <p className="text-sm">
              Share your details below and you'll receive a Calendly link via email to schedule a free consultation.
              This helps me learn about your goals and prepare a personalized first lesson.
            </p>
          </div>
        )}

        {isSuccess ? (
          <div className="alert alert-success flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold">Perfect! Check your inbox.</span>
            </div>
            <p className="text-sm">
              I'll send you a Calendly link within 24 hours to schedule your free pre-lesson consultation.
              We'll discuss your goals and I'll prepare a customized first lesson for you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value={formType === 'in-home' ? 'In-Home Lesson Request' : 'Lesson Inquiry - Pre-Consultation'} />

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full"
                placeholder="Your name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full"
                placeholder="your@email.com"
              />
            </div>

            {formType === 'in-home' && (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Neighborhood *</span>
                  </label>
                  <input
                    type="text"
                    name="neighborhood"
                    required
                    className="input input-bordered w-full"
                    placeholder="e.g., Bushwick, Manhattan, Williamsburg"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Preferred Days/Times</span>
                  </label>
                  <input
                    type="text"
                    name="preferred_times"
                    className="input input-bordered w-full"
                    placeholder="e.g., Weekday evenings, Saturday mornings"
                  />
                </div>
              </>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  {formType === 'in-home' ? 'Any specific goals?' : 'Message'}
                </span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered h-24"
                placeholder={formType === 'in-home'
                  ? 'Tell me about your experience level and what you want to work on...'
                  : 'Your message...'
                }
              />
            </div>

            {error && (
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            )}

            <div className="modal-action">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  )
}
