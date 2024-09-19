import Image from "next/image"
import studioImage from '../../public/img/guitarist2.jpeg'

export default function CardLeft() {
  return (
  <div className="hidden lg:flex card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">
    <figure className="max-w-[50%] h-96">
      <Image
      className=""
        src={studioImage}
        alt="Album" />
    </figure>
    <div className="card-body lg:w-1/2 py-4 lg:py-12">
      <h2 className="card-title text-3xl font-bold">What You’ll Learn</h2>
      <div>
        <div className="list-inside text-left grid grid-cols-1">
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>Master essential guitar techniques that fit your style</span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>Unlock harmony and theory in a way that makes sense for band settings</span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>Analyze and play your favorite songs to gain new insights</span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>Develop unique approaches to songwriting and arrangement</span>
          </div>
          <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
            <span className="text-3xl ml-2 mb-2">🎸 </span>
            <span>Find your sonic “slot” and stand out in any band</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}