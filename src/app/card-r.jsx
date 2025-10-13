import Image from 'next/image'
import studioImage from '../../public/img/guitarist.jpeg'

export default function CardRight() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">
      <div className="card-body lg:w-1/2 py-4 lg:py-12 max-sm:px-2">
        <h2 className="card-title text-3xl font-bold">Who I Teach</h2>
        <p className="text-lg font-bold text-secondary grow-0 mb-4">
          Guitarists of all styles who want to:
        </p>
        <div className="list-inside text-left grid grid-cols-1 gap-2 items-center">
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Play or excel in bands, ensembles, or collaborative projects
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Perform confidently as singer-songwriters at clubs, open mics, or
              online
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Master technique, music theory, and harmony to play with ease
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Break through creative roadblocks and unlock new ideas on guitar
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Contribute meaningfully to songwriting, arranging, and composing
            </span>
          </div>
        </div>
      </div>
      <figure className="lg:max-w-[50%] md:h-96">
        <Image
          src={studioImage}
          className=""
          alt="Guitar lesson at Bushwick Guitar Studio"
        />
      </figure>
    </div>
  )
}
