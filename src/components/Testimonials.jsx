import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Testimonials() {
    return (
        <>
            <section
                className="testimonials testimonials-two dsn-container p-relative mb-section dsn-swiper"
                data-dsn-title="Clients See"
            >
                <div className="section-title">
                    <span className="tag-heading p-10 mb-15 background-section heading-color">
                        Clients See
                    </span>
                    <h2 className="heading-h2">
                        Feedback from <br /> our clients.
                    </h2>
                </div>
                <div className="testimonial-inner ">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide testimonial-item">
                                {/* <i className="fas fa-quote-left" /> */}
                                <FontAwesomeIcon icon = {faQuoteLeft}/>
                                <div className="testimonial-content">
                                    <p className="max-w750 p-large">
                                        "2Twelve helped us turnaround a brand marketing exercise in a
                                        short time and achieved our goals for that campaign. We couldn't
                                        have been happier with their work."
                                    </p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author">
                                        <img src="assets/img/team/1.jpg" alt="" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Omaxe</h4>
                                        <h5>2Twelve Customer</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide testimonial-item">
                                <i className="fas fa-quote-left" />
                                <div className="testimonial-content">
                                    <p className="max-w750 p-large">
                                        "We were seeking a bespoke digital agency that would understand
                                        our unique needs and deliver out of the box solutions. And we are
                                        happy to say that 2Twelve has not disappointed us."
                                    </p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author">
                                        <img src="assets/img/team/2.jpg" alt="" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Media Hermits</h4>
                                        <h5>2Twelve Customer</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="control-nav p-absolute w-100  d-flex dsn-container align-items-center  justify-content-between ">
                        <div
                            className="prev-container image-zoom move-circle background-theme"
                            data-dsn="parallax"
                        >
                            <svg viewBox="0 0 40 40">
                                <path
                                    className="path circle"
                                    d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"
                                ></path>
                                <polyline
                                    className="path"
                                    points="14.6 17.45 20 22.85 25.4 17.45"
                                ></polyline>
                            </svg>
                        </div>
                        <div
                            className="next-container image-zoom move-circle background-theme"
                            data-dsn="parallax"
                        >
                            <svg viewBox="0 0 40 40">
                                <path
                                    className="path circle"
                                    d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"
                                ></path>
                                <polyline
                                    className="path"
                                    points="14.6 17.45 20 22.85 25.4 17.45"
                                ></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonials