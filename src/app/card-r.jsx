import Image from "next/image"
import studioImage from '../../public/img/guitarist.jpeg'

export default function CardRight() {
  return (
  <div className="card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">

  <div className="card-body lg:w-1/2 py-4 lg:py-12 max-sm:px-2">
    <h2 className="card-title text-3xl font-bold">Who I Teach</h2>
    <p className="text-lg font-bold text-secondary grow-0">Intermediate guitarists who:</p>
    <div>
      <div className="list-inside text-left grid grid-cols-1">
        <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
          <span className="text-3xl ml-2 mb-2">🎸 </span><span>Play or want to play in bands</span>
        </div>
        <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
          <span className="text-3xl ml-2 mb-2">🎸 </span>
          <span>Struggle with technique, theory, or harmony</span>
        </div>
        <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
          <span className="text-3xl ml-2 mb-2">🎸 </span>
          <span>Feel stuck in their creative process</span>
        </div>
        <div className="grid grid-cols-[minmax(20px,_auto)_1fr] grid-rows-1 gap-4">
          <span className="text-3xl ml-2 mb-2">🎸 </span>
          <span>Want to contribute more to songwriting and arranging</span>
        </div>
      </div>
    </div>
  </div>
  <figure className="lg:max-w-[50%] md:h-96">
    <Image
      src={studioImage}
      className=""
      alt="Album" />
  </figure>
</div>
  )
}