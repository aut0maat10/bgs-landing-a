import Image from 'next/image'

export default function Hero({ heroImage }) {
  const doClick = () => {
    const el = document.getElementById('calendlySection')
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={heroImage}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
          alt={'band studio'}
        />
        <div className="w-full lg:w-1/2">
          <p className="my-4">Unlock your creative potential with</p>
          <h1 className="text-5xl font-bold">
            <span className="text-secondary">Guitar Lessons</span> Designed for
            Band Players
          </h1>
          <div className="py-6">
            <p className="text-lg">
              <span>&#x2714;</span> Online lessons
            </p>
            <p className="text-lg pb-4">
              <span>&#x2714;</span> In-person lessons{' '}
              <span className="italic text-secondary text-sm ml-4 inline-block transform animate-pulse">
                Available in Brooklyn!
              </span>
            </p>
          </div>
          <div className="max-sm:text-center">
            <button onClick={doClick} className="btn btn-primary">
              Book free call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
