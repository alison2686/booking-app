import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Services />
        <Footer />
    </>
  )
}

export default Home