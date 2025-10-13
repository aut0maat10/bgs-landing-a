'use client'
import { useState } from 'react'
import NavBar from '../navbar'
import Footer from '../footer'
import About from '../about'
import ContactModal from '../components/ContactModal'

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <NavBar onOpenContact={() => setIsModalOpen(true)} />
      <div className="bg-base-100 min-h-screen py-12">
        <About />
      </div>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType="general"
      />
    </>
  )
}
