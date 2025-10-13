import Image from 'next/image'
import studioImage from '../../public/img/guitarist2.jpeg'

export default function CardLeft() {
  return (
    <div className="flex card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">
      <figure className="h-0 max-w-[50%] lg:h-96">
        <Image
          className="hidden lg:block"
          src={studioImage}
          alt="Guitar lesson at Bushwick Guitar Studio"
        />
      </figure>
      <div className="card-body lg:w-1/2 py-4 lg:py-12">
        <h2 className="card-title text-3xl font-bold">What You’ll Learn</h2>
        <div className="list-inside text-left grid grid-cols-1 gap-2">
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Master essential guitar techniques tailored to your style and
              goals
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Understand harmony and theory in a practical, musical way
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Analyze and play your favorite songs to inspire your own
              creativity
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Develop unique approaches to songwriting, arranging, and
              improvisation
            </span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4 items-center">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>
              Discover your signature sound and confidently express yourself on
              guitar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
