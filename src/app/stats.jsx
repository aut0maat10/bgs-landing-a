export default function Stats() {
  return (
    <div className="stats stats-vertical block m-auto md:flex lg:stats-horizontal shadow max-w-[70vw]">
      <div className="stat place-items-center">
        {/* <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div> */}
        <div className="stat-title">Years of experience</div>
        <div className="stat-value text-primary">20+</div>
        <div className="stat-desc">Private lessons & music schools</div>
      </div>
    
      <div className="stat place-items-center">
        {/* <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div> */}
        <div className="stat-title">Students count</div>
        <div className="stat-value text-secondary">150+</div>
        <div className="stat-desc">All ages/backgrounds</div>
      </div>
    
      <div className="stat place-items-center">
        <div className="stat-title">Returning students</div>
        <div className="stat-value">90%</div>
        <div className="stat-desc text-secondary">Weekly/bi-weekly lessons</div>
      </div>
    </div>
  )
}