'use client'
import { useState } from 'react'
import NavBar from '../navbar'
import Footer from '../footer'
import ContactModal from '../components/ContactModal'

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'in-home' | 'general'>('general')

  const openContactForm = (type: 'in-home' | 'general' = 'general') => {
    setModalType(type)
    setIsModalOpen(true)
  }

  return (
    <>
      <NavBar onOpenContact={() => openContactForm('general')} />
      <div className="bg-base-100 min-h-screen">
        {/* Header */}
        <div className="hero bg-base-200 py-16">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Guitar Lessons in Manhattan, Brooklyn & Online
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Personalized, results-focused lessons designed for NYC
                musicians, hobbyists, and professionals.
              </p>
              <p className="text-base md:text-lg mt-6 max-w-3xl mx-auto">
                At Bushwick Guitar Studio, every lesson is tailored to your
                goals — whether you're refining your rhythm, improving soloing,
                or learning how to sound great with other musicians. Choose the
                lesson type that fits your schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Studio Lessons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              🎸 Studio Lessons – Midtown and Brooklyn
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Single Lesson</h3>
                  <p className="text-3xl font-bold">$140</p>
                  <p className="text-sm text-gray-600">55 minutes</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">4-Lesson Pack</h3>
                  <p className="text-3xl font-bold">$500</p>
                  <p className="text-sm text-gray-600">≈ $125 / lesson</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">8-Lesson Pack</h3>
                  <p className="text-3xl font-bold">$960</p>
                  <p className="text-sm text-gray-600">≈ $120 / lesson</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-2">
                <strong>Location:</strong> Midtown or Bushwick studio
              </p>
              <p className="mb-2">
                <strong>Includes:</strong> recorded lesson + practice notes
              </p>
              <p className="text-sm italic text-gray-600">
                Ideal for players who want a focused environment with full gear
                setup and no distractions.
              </p>
            </div>
            <button onClick={() => openContactForm('general')} className="btn btn-primary btn-lg">
              Book a Studio Lesson
            </button>
          </section>

          {/* Online Lessons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              🌐 Online Lessons - Anywhere
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Single Lesson</h3>
                  <p className="text-3xl font-bold">$120</p>
                  <p className="text-sm text-gray-600">55 minutes</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">4-Lesson Pack</h3>
                  <p className="text-3xl font-bold">$440</p>
                  <p className="text-sm text-gray-600">≈ $110 / lesson</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">8-Lesson Pack</h3>
                  <p className="text-3xl font-bold">$800</p>
                  <p className="text-sm text-gray-600">≈ $100 / lesson</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-2">
                <strong>Platform:</strong> Zoom (recorded)
              </p>
              <p className="text-sm italic text-gray-600">
                Perfect for busy students who want structured progress and
                flexibility — no commute, same quality instruction.
              </p>
            </div>
            <button onClick={() => openContactForm('general')} className="btn btn-primary btn-lg">
              Book an Online Lesson
            </button>
          </section>

          {/* In-Home Lessons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              🏙️ In-Home Guitar Lessons — I Come to You in NYC
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Get personalized, results-focused lessons in the comfort of your
              home. Available in Bushwick, Brooklyn, Manhattan, and select NYC
              neighborhoods.
            </p>
            <p className="text-base mb-6">
              Pricing for in-home lessons varies depending on your location and
              schedule.
              <br />
              Contact me for a personalized quote — I'll get back to you with
              options within 24 hours.
            </p>
            <button
              onClick={() => openContactForm('in-home')}
              className="btn btn-primary btn-lg"
            >
              Request In-Home Lessons
            </button>
          </section>

          {/* Discovery Session */}
          <section className="mb-16">
            <div className="card bg-secondary text-secondary-content shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-4">
                  ⚡ Discovery Session
                </h2>
                <p className="text-4xl font-bold mb-4">$100 — 55 min</p>
                <p className="text-lg mb-4">
                  A full private lesson + skill assessment, roadmap, and
                  personalized practice plan.
                  <br />
                  Perfect for new students or anyone unsure which package to
                  choose.
                </p>
                <div className="card-actions">
                  <button onClick={() => openContactForm('general')} className="btn btn-primary btn-lg">
                    Book a Discovery Session
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Students Choose */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              💡 Why Students Choose Bushwick Guitar Studio
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Learn through songs and styles you love</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Build technique while developing your own sound</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Every lesson includes recorded recap + practice plan
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Flexible scheduling — studio, in-home, or online</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Designed for musicians, hobbyists, and working professionals
                </span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">💬 FAQ</h2>
            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Do you travel outside Brooklyn?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes — I offer in-home lessons across NYC. Rates vary by
                    neighborhood; just contact me for a personalized quote.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  What's included with each lesson?
                </div>
                <div className="collapse-content">
                  <p>
                    A personalized plan, recorded audio/video recap, and
                    follow-up notes.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  Do you offer packages?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes — 4- and 8-lesson packs offer discounted rates and
                    priority scheduling.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="bg-base-200 py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Guitar Journey?</h2>
            <p className="text-lg mb-8">
              Submit your info and I'll send you a personalized booking link within 24 hours.
            </p>
            <button onClick={() => openContactForm('general')} className="btn btn-primary btn-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </>
  )
}
