import Image from "next/image"

export default function Hero({ heroImage }) {
  return (
    <div className="hero bg-base-200 min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
              src={heroImage}
              className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt={'band studio'} />
        <div className='w-full lg:w-1/2'>
          <p className='my-4'>Unlock your creative potential with</p>
          <h1 className="text-5xl font-bold">
          <span className='text-secondary'>Guitar Lessons</span> Designed for Band Players</h1>
          <p className="py-6">
          <span>&#x2714;</span> Online lessons
          <span>&#x2714;</span> In-person lessons
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}