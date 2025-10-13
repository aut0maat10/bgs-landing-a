export default function Pricing({ onOpenModal }) {
  return (
    <div className="pricing bg-base-200 py-12 flex flex-col items-center md:items-stretch">
      <h2 className="text-3xl font-bold mb-4 self-center">
        Guitar Lessons Designed Around You
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        {/* Discovery Session */}
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">Discovery Session 🎸</h2>
            <p className="text-3xl md:text-5xl font-bold">$100</p>
            <p className="text-sm">55 minutes</p>
            <p className="text-base italic mt-2">
              Start with a one-on-one session to explore your goals and see if
              we're a fit.
            </p>
            <div className="card-actions justify-center mt-6">
              <button
                onClick={() => onOpenModal && onOpenModal('general')}
                className="btn btn-primary"
              >
                Book Discovery
              </button>
            </div>
          </div>
        </div>

        {/* Studio Lessons */}
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="badge badge-primary text-white absolute top-5 right-4 mt-4">
            Most Popular
          </div>
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">Studio Lessons 💻</h2>
            <p className="text-3xl md:text-5xl font-bold">From $120</p>
            <p className="text-sm">per 55-minute lesson</p>
            <p className="text-base italic mt-2">
              Available in-studio or online — ideal for ongoing students.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="/pricing" className="btn btn-primary">
                View Packages
              </a>
            </div>
          </div>
        </div>

        {/* In-Home Lessons */}
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">In-Home Lessons 🏠</h2>
            <p className="text-3xl md:text-5xl font-bold">Custom Quote</p>
            <p className="text-sm">Based on location</p>
            <p className="text-base italic mt-2">
              Convenient private lessons in your own home — available across
              NYC.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="/pricing#in-home" className="btn btn-primary">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/pricing" className="btn btn-secondary btn-lg">
          View Full Pricing, Packages & Discounts →
        </a>
      </div>
    </div>
  )
}
