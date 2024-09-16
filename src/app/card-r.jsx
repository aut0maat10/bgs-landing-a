import Image from "next/image"
import studioImage from '../../public/img/guitarist.jpeg'

export default function CardRight() {
  return (
  <div className="card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">

  <div className="card-body lg:w-1/2 py-4 lg:py-12 max-sm:px-2">
    <h2 className="card-title text-3xl font-bold">Who I Teach</h2>
    <p className="text-lg font-bold text-secondary grow-0">Intermediate guitarists who:</p>
    <div>

    <ul className="list-inside text-left">
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Play or want to play in bands</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Struggle with technique, theory, or harmony</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Feel stuck in their creative process</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Want to contribute more to songwriting and arranging</li>
    </ul>
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