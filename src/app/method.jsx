import Image from 'next/image'
import studioImage from '../../public/img/studio.jpeg'

export default function Method() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-32 lg:my-12">
      <figure className="lg:max-w-[50%] h-96 mx-4">
        <Image
          src={studioImage}
          alt="Guitar lesson at Bushwick Guitar Studio"
        />
      </figure>
      <div className="card-body lg:w-1/2 max-sm:py-2">
        <h2 className="card-title text-3xl">Our Method</h2>
        <p className="text-lg">
          At{' '}
          <span className="text-primary font-semibold">
            Bushwick Guitar Studio
          </span>
          , I offer personalized lessons for musicians of all styles and
          goals—from aspiring singer-songwriters to hobbyists and experienced
          players looking to level up.
          <br />
          <br />
          We focus on real music: your favorite{' '}
          <span className="text-secondary">songs</span>, the{' '}
          <span className="text-secondary">techniques</span> that make them
          shine, and how to apply them to your own{' '}
          <span className="text-secondary">creative process</span>. You’ll
          develop{' '}
          <span className="text-secondary">chords, scales, improvisation</span>,
          and practical skills that let you play confidently, compose your own
          music, and express yourself fully on the guitar.
        </p>
      </div>
    </div>
  )
}
