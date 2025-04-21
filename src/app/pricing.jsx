export default function Pricing() {
  const doClick = () => {
    const el = document.getElementById('calendlySection')
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="pricing bg-base-200 py-12 flex flex-col items-center md:items-stretch">
      <h2 className="text-3xl font-bold lg:mb-12 self-center">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="badge badge-primary text-white absolute top-4 right-4 rotate-12 mt-4">
            Limited time offer!
          </div>
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">One Time Lesson</h2>
            <p className="text-3xl md:text-5xl font-bold">
              $50{' '}
              <span className="text-sm lg:text-lg stat-title line-through font-light ml-2">
                $60
              </span>
            </p>
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
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="badge badge-primary text-white absolute top-4 right-4 rotate-12 mt-4">
            Limited time offer!
          </div>
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">4-Lesson Package</h2>
            <p className="text-3xl md:text-5xl font-bold">
              $180
              <span className="text-sm lg:text-lg stat-title line-through font-light ml-2">
                $240
              </span>
            </p>
            <p>$45/lesson</p>
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
        <div className="card bg-base-100 w-72 xl:w-96 shadow-xl relative">
          <div className="badge badge-primary text-white absolute top-4 right-4 rotate-12 mt-4">
            Limited time offer!
          </div>
          <div className="card-body text-left">
            <h2 className="card-title text-secondary">8-Lesson Package</h2>
            <p className="text-4xl md:text-5xl font-bold">
              $350
              <span className="text-sm lg:text-lg line-through font-light ml-2 stat-title">
                $480
              </span>
            </p>
            <p>$43.75/lesson</p>
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
