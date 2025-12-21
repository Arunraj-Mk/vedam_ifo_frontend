import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import TrustedBy from './components/TrustedBy'
import ProjectBy from './components/ProjectBy'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import JustSystem from './components/JustSystem'
import CCC from './components/CCC'
import WhyPerform100x from './components/WhyPerform100x'
import Footer from './components/Footer'
import MidAnimation from './components/MidAnimation'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div id="hero">
        <HeroSection />
      </div>
      <TrustedBy />
      <div id="about">
        <ProjectBy />
      </div>
      {/* <AnimationSection /> */}
      <MidAnimation />
      <div id="services">
        <WhatWeDo />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Testimonials />
      <JustSystem />
      <CCC />
      <WhyPerform100x />
      <Footer />
    </div>
  )
}

export default HomePage
