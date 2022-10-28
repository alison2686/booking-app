import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const Home = () => {
  return (
    <Router>
        <Navbar />
        <HeroSection />
        <Services />
        <Footer />
    </Router>
  )
}

export default Home