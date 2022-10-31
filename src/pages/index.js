import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../components/SideBar'

const Home = () => {
  return (
    <Router>
        <Navbar />
        <Sidebar />
        <HeroSection />
        <Services />
        <Footer />
    </Router>
  )
}

export default Home