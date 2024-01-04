import React from 'react'
import Image from 'next/image'
import servicesLogo1 from '@/assets/services/developing.svg'
import servicesLogo2 from '@/assets/services/mobile.svg'
import servicesLogo3 from '@/assets/services/customize.svg'
import servicesLogo4 from '@/assets/services/business.svg'

function ServiceSection() {
    return (
        <>
            <section
                className="services dsn-container p-relative section-margin "
                data-dsn-title="Our Service"
            >
                <div className="section-title">
                    <span className="tag-heading p-10 mb-15 background-section heading-color">
                        Why Us
                    </span>
                    <h2 className="heading-h2">
                        Because we walk with you, every step <br />
                        of the way, from ideation to execution.{" "}
                    </h2>
                    <ul className="mt-30 lest-icon">
                        <li>Doers, with 40+ years of cumulative experience</li>
                        <li>All projects are custom ideated and executed</li>
                        <li>Tech-enabled solutions whose progress can be measured</li>
                        {/* <li>Devi shakti! Headed by a woman leader.</li> */}
                    </ul>
                </div>
                <div
                    className="d-grid grid-md-2 grid-lg-3 dsn-isotope grid"
                    data-dsn-item=".service-item"
                >
                    <div className="service-item">
                        <div className="service-item-inner background-section style-box">
                            <div className="icon">
                                {/* <img src="assets/img/services/developing.svg" alt="" /> */}
                                <Image src = {servicesLogo1} alt= ""/>
                            </div>
                            <div className="content-box">
                                <h4 className="title-block mt-20">Creative </h4>
                                <p className="description mt-20">
                                    Quick turnaround of any brief into a surefire creative solution for
                                    your business. We are creative chameleons who can fit any skin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-inner background-section style-box">
                            <div className="icon">
                                {/* <img src="assets/img/services/mobile.svg" alt="" /> */}
                                <Image src = {servicesLogo2} alt = ""/>
                            </div>
                            <div className="content-box">
                                <h4 className="title-block mt-20">Digital </h4>
                                <p className="description mt-20">
                                    We are digital mavericks in the true sense of the word. With an eye
                                    on the latest industry updates, our specialty is out-of-the-box
                                    solutions that deliver.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-inner background-section style-box">
                            <div className="icon">
                                {/* <img src="assets/img/services/business.svg" alt="" /> */}
                                <Image src={servicesLogo3} alt=""/>
                            </div>
                            <div className="content-box">
                                <h4 className="title-block mt-20">Ecommerce </h4>
                                <p className="description mt-20">
                                    Selling online is not everyone’s cup of tea (or coffee, in our
                                    case). Our unique ecommerce solutions deliver the business outcomes
                                    you desire.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-inner background-section style-box">
                            <div className="icon">
                                {/* <img src="assets/img/services/customize.svg" alt="" /> */}
                                <Image src= {servicesLogo4} alt =""/>
                            </div>
                            <div className="content-box">
                                <h4 className="title-block mt-20">Events </h4>
                                <p className="description mt-20">
                                    We are not into demagoguery, but we know what makes an audience
                                    tick. Whether it is a large family event or a corporate
                                    extravaganza, we can get it rolling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServiceSection