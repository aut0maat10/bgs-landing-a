'use client'
// import { Hero, Button } from 'react-daisyui'
// import Image from 'next/image'
import HeroImg from './img/hero4.jpg'
import Hero from './hero'
import NavBar from './navbar'
import Stats from './stats'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero heroImage={HeroImg} />
      <Stats />
    </>
  )    
}
