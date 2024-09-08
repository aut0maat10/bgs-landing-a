import Image from "next/image"
import studioImage from './img/hero6.jpeg'

export default function CardLeft() {
  return (
  <div className="card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">
  <figure>
    <Image
      src={studioImage}
      alt="Album" />
  </figure>
  <div className="card-body lg:w-1/2 py-4 lg:py-12">
    <h2 className="card-title text-3xl font-bold">What You’ll Learn</h2>
    <ul>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Master essential guitar techniques that fit your style</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Unlock harmony and theory in a way that makes sense for band settings</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Analyze and play your favorite songs to gain new insights</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Develop unique approaches to songwriting and arrangement</li>
      <li><span className="text-3xl ml-2 mb-2">🎸 </span>Find your sonic “slot” and stand out in any band</li>
    </ul>
  </div>
</div>
  )
}