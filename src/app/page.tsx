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
import ContactModal from './components/ContactModal'
// import Form from './form'
import Footer from './footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'in-home' | 'general'>('general')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        send_to: 'AW-16871823694',
      })
    }
  }, [])

  return (
    <>
      <NavBar onOpenContact={() => {
        setModalType('general')
        setIsModalOpen(true)
      }} />
      <Hero heroImage={HeroImg} onOpenContact={() => {
        setModalType('general')
        setIsModalOpen(true)
      }} />
      <Stats />
      <div className="bg-base-200 mx-2 my-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold p-2 lg:px-32 lg:py-4 md:text-center">
          Stuck on your guitar progress?
          <span className="text-secondary">
            <br />
            I'll help you break through and play confidently.
          </span>
        </h2>
        <p className="text-lg max-w-3xl text-center italic mb-4">
          From your first riffs to advanced techniques, I'll guide you to
          overcome creative roadblocks, improve your skills, and confidently fit
          into any band or ensemble. Personalized lessons designed for musicians
          at every stage.
        </p>
      </div>

      <Method />
      <CardRight />
      <Pricing onOpenModal={(type: 'in-home' | 'general') => {
        setModalType(type)
        setIsModalOpen(true)
      }} />
      <CardLeft />
      {/* <Form /> */}
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </>
  )
}
