import Image from "next/image"
import studioImage from '../../public/img/Pahlman-42.jpg'

export default function About() {
  return (
  <div className="card xl:card-side bg-base-100 shadow-xl mx-2 lg:mx-32 lg:my-8">
  <figure className="xl:w-1/2">
    <Image
      src={studioImage}
      height={600}
      alt="Robin Pahlman playing a Nash JM-63" />
  </figure>
  <div className="card-body xl:w-1/2 py-4 lg:py-12 max-sm:px-2">
    <h2 className="card-title text-3xl text-primary">My name is Robin.</h2>
    <p className="text-sm lg:text-md">I&apos;m a guitarist, producer, and educator based in New York City. I received my music education at <span className="text-secondary">Stockholms Musikkonservatorium (SMK)</span> in Stockholm, Sweden. I started teaching guitar at 17 and now I have worked as a freelance musician and guitar teacher for 20+ years. I have worked with numerous bands and played shows all over the world – from small DIY spaces in Vienna, Austria to Carnegie Hall in New York City.<br/><br />
    I teach electric and acoustic guitar and as a freelance musician I am fluent in many genres, including pop, rock, blues, folk, funk, soul, R&B, hard rock, metal, country, and jazz. I have planned and produced numerous band workshops for children and teenagers, and I have served as music director in theater productions.<br /><br />

    For private lessons I like to tailor my lessons to the student’s goals and interests. I like to help students analyze the music they play and apply a healthy dose of music theory for a greater understanding of the building blocks of music of various genres.<br /><br />

    <span className="text-secondary">My main goal as an educator is to help my students reach their goals, and I take great pride in the fact that several of my former students have pursued successful professional careers in music.</span><br /><br />

    <span className="text-primary">I am happy to help students who are interested in songwriting and music production as well.</span>

    


</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
  )
}