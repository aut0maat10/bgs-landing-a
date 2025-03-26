'use client'
// import { Hero, Button } from 'react-daisyui'
// import Image from 'next/image'
import { sendGTMEvent } from '@next/third-parties/google'
import HeroImg from '../../public/img/hero4.jpg'
import Hero from './hero'
import NavBar from './navbar'
import Stats from './stats'
import Method from './method'
import CardRight from './card-r'
import CardLeft from './card-l'
import Pricing from './pricing'
import Calendly from './calendly'
// import Form from './form'
import TextUs from './text-us'
import Footer from './footer'
import About from './about'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        send_to: 'AW-16871823694',
      })
    }
  }, [])
  return (
    <>
      <NavBar />
      <Hero heroImage={HeroImg} />
      <Stats />
      <div className="bg-base-200 mx-2">
        <h2 className="text-2xl md:text-3xl font-bold p-2 lg:px-32 lg:py-12 md:text-center">
          Are you an{' '}
          <span className="text-secondary">intermediate guitarist</span>{' '}
          struggling to find your place in your band? Do you feel like your
          creativity is stifled by a lack of technique or understanding of
          harmony?{' '}
          <span className="text-secondary">
            <br />
            You&apos;re not alone–and I can&nbsp;help.
          </span>
        </h2>
      </div>
      <Method />
      <CardRight />
      <CardLeft />
      <Pricing />
      <Calendly />
      <TextUs />
      {/* <Form /> */}
      <About />
      <Footer />
    </>
  )
}
