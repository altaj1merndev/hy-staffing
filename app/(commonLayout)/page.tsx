import React from 'react'
import NavBar from '../components/commonLayout/home/NavBar'
import HeroSection from '../components/commonLayout/home/HeroSection'
import Ratings from '../components/commonLayout/home/Ratings'
import WhoWeAre from '../components/commonLayout/home/WhoWeAre'
import JobOpportunities from '../components/commonLayout/home/JobOpportunities'
import HowItWorks from '../components/commonLayout/home/HowItWorks'
import SuccessStories from '../components/commonLayout/home/SuccessStories'
import EmployerCTA from '../components/commonLayout/home/EmployerCTA'
import Footer from '../components/commonLayout/home/Footer'

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Ratings/>
      <WhoWeAre/>
      <JobOpportunities/>
      <HowItWorks/>
      <SuccessStories/>
      <EmployerCTA/>
      <Footer/>
    </div>
  )
}
