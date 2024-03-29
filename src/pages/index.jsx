import AboutSection from '@/components/AboutSection'
import BlogList from '@/components/BlogList'
import ContactBtn from '@/components/ContactBtn'
import Footer from '@/components/Footer'
import LoadingPage from '@/components/LoadingPage'
import Menu from '@/components/Menu'
import NextPage from '@/components/NextPage'
import ServiceSection from '@/components/ServiceSection'
import SideBoxLeft from '@/components/SideBoxLeft'
import SliderParallax from '@/components/SliderParallax'
import StoriesBtn from '@/components/StoriesBtn'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <LoadingPage/> */}
      <Menu/>
      <div className="main-root">
        <SideBoxLeft pageName = "Home" textStroke = " Creative. Digital. Ecommerce. Events."/>
        <div id="dsn-scrollbar">
            <div className=" inner-content">
                <div className="wrapper ">
                  <SliderParallax/>
                </div>
            </div>
        </div>
        <div className="inner-content">

          <AboutSection />
          <ServiceSection />
          <BlogList />
          <NextPage />
          <Footer />
          <ContactBtn/>
          <StoriesBtn/>
        </div>
      </div>
    </>
  )
}
