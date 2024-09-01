import Image from "next/image"
import studioImage from './img/hero6.jpeg'

export default function Method() {
  return (
  <div className="card lg:card-side bg-base-100 shadow-xl mx-4 lg:mx-32 lg:my-12">
  <figure>
    <Image
      src={studioImage}
      alt="Album" />
  </figure>
  <div className="card-body lg:w-1/2 py-4 lg:py-12">
    <h2 className="card-title text-3xl">Method</h2>
    <p className="text-lg">At <span className="text-primary font-semibold">Bushwick Guitar Studio</span>, I offer personalized guitar lessons tailored specifically for musicians like you—those who want to be more than just another player in the band.<br/><br/>My approach goes beyond just teaching <span className="text-secondary">chords</span> and <span className="text-secondary">scales</span>. Instead, we’ll dive deep into your favorite <span className="text-secondary">songs</span>, study the <span className="text-secondary">techniques</span> that make them powerful, and use that knowledge to fuel your own <span className="text-secondary">creative process</span>.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
  )
}