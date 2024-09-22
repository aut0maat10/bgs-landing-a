export default function Pricing() {
  const doClick = () => {
    const el = document.getElementById('calendlySection')
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="pricing bg-base-200 py-12 flex flex-col items-center md:items-stretch">
      <h2 className="text-3xl font-bold lg:mb-12 self-center">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">One Time Lesson</h2>
            <p className="text-3xl md:text-5xl font-bold">$60</p>
            <p>60 minutes</p>
            <p>Online (anywhere) or in-person (Bushwick)</p>
            <p>Includes free 15-minute assessment</p>
            <div className="card-actions justify-center mt-6">
              <button onClick={doClick} className="btn btn-primary">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">5-Lesson Package</h2>
            <p className="text-3xl md:text-5xl font-bold">
              $275
              <span className="text-sm lg:text-lg stat-title line-through font-light ml-2">
                $300
              </span>
            </p>
            <p>$55/lesson</p>
            <p>60 minutes</p>
            <p>Online (anywhere) or in-person (Brooklyn, NY)</p>
            <p>Personalized study plan</p>
            <div className="card-actions justify-center mt-6">
              <button onClick={doClick} className="btn btn-primary">
                Book now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">10-Lesson Package</h2>
            <p className="text-4xl md:text-5xl font-bold">
              $500
              <span className="text-sm lg:text-lg line-through font-light ml-2 stat-title">
                $600
              </span>
            </p>
            <p>$50/lesson</p>
            <p>60 minutes</p>
            <p>Online (anywhere) or in-person (Brooklyn, NY)</p>
            <p>Personalized study plan</p>
            <div className="card-actions justify-center mt-6">
              <button onClick={doClick} className="btn btn-primary">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
