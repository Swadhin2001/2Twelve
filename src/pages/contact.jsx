import React from 'react'
import Footer from '@/components/Footer'
import SideBoxLeft from '@/components/SideBoxLeft'
import Menu from '@/components/Menu'
import AboutNextPage from '@/components/AboutNextPage'
import Testimonials from '@/components/Testimonials'
import ContactHeader from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import LoadingPage from '@/components/LoadingPage'

function contact() {
  return (
    <>
      {/* <LoadingPage/> */}
      <Menu/>
      <div className="main-root">
      <SideBoxLeft pageName = "Contact" textStroke = "Contact Us"/>
        <div id="dsn-scrollbar">
            <div class=" inner-content">
                <div class="wrapper ">
                </div>
            </div>
        </div>
        <div className="inner-content">
          <ContactHeader upperHeading = "ready" lowerHeading = "to get started?" about = "We are transforming the way companies ideate and execute their marketing projects. If you want to be a part of this revolution, do reach out to us."/>
          <ContactForm/>
          <AboutNextPage upLetterStroke = "#Experience" downLetterStroke = "Excellence"/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default contact