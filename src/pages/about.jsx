import React from 'react'
import Footer from '@/components/Footer'
import SideBoxLeft from '@/components/SideBoxLeft'
import Menu from '@/components/Menu'
import AboutNextPage from '@/components/AboutNextPage'
import Testimonials from '@/components/Testimonials'
import AboutHeader from '@/components/Header'
import LoadingPage from '@/components/LoadingPage'
import AboutSlider from '@/components/AboutSlider'
import AboutService from '@/components/AboutService'

function about() {
  return (
    <>
      {/* <LoadingPage/> */}
      <Menu />
      <div className="main-root">
        <SideBoxLeft pageName="About" textStroke="About Us" />
        <div id="dsn-scrollbar">
          <div class=" inner-content">
            <div class="wrapper ">
              {/* <SliderParallax/> */}
            </div>
          </div>
        </div>
        <div className="inner-content">

          <AboutHeader upperHeading="Exceptional" lowerHeading="Digital Experiences" about="Customers are ever-evolving in their wants. Only a digital agency with a strong handle on the latest trends and exceptional creativity can deliver in this environment." />
          <AboutSlider />
          <AboutService />
          <Testimonials />
          <AboutNextPage upLetterStroke="Questions?" downLetterStroke="Let Us Know" />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default about