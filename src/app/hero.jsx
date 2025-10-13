import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero({ heroImage, onOpenContact }) {
  const options = ['Band Players', 'Singer-Songwriters', 'Music Enthusiasts']
  const [currentOption, setCurrentOption] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOption(prev => (prev + 1) % options.length)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [options.length])

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
            Aspiring
            <br />{' '}
            <span className="text-primary">{options[currentOption]}</span>
          </h1>
          {/* <div className="py-6">
            <p className="text-lg">
              <span>&#x2714;</span> Studio lessons{' '}
              <span className="italic text-secondary text-sm ml-4 inline-block transform animate-pulse">
                In Manhattan and Brooklyn
              </span>
            </p>
            <p className="text-lg">
              <span>&#x2714;</span> Online lessons
            </p>
            <p className="text-lg pb-4">
              <span>&#x2714;</span> In-home lessons{' '}
              <span className="italic text-secondary text-sm ml-4 inline-block transform animate-pulse">
                In Manhattan, Brooklyn, and Queens!
              </span>
            </p>
          </div> */}
          <div className="space-y-2 py-6">
            <div className="flex items-center">
              <span className="mr-2 text-primary">&#x2714;</span>
              <span>Studio lessons</span>
              <span className="ml-4 italic text-secondary text-sm">
                Manhattan & Brooklyn
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">&#x2714;</span>
              <span>Online lessons</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">&#x2714;</span>
              <span>In-home lessons</span>
              <span className="ml-4 italic text-secondary text-sm">
                Manhattan, Brooklyn & Queens
              </span>
            </div>
          </div>
          <div className="max-sm:text-center">
            <button onClick={() => onOpenContact && onOpenContact()} className="btn btn-primary">
              Book free call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
