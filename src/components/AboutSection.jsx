import React from 'react'

function AboutSection() {
    return (
        <>
            <section
                className="about p-relative dsn-container section-margin"
                data-dsn-title="About Us"
            >
                <div className="section-title">
                    <span className="tag-heading p-10 mb-15 background-section heading-color">
                        About 2Twelve
                    </span>
                    <h2 className="heading-h2">
                        You are the star here! <br /> Not us.
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="p-relative text">
                            <h2 className="title-block ">
                                But if you insist, we’d like to tell you about us.{" "}
                            </h2>
                            <p className="mt-30">
                                2Twelve is the brainchild of a few mavericks, who are going all out as
                                being the best marketing professionals, creative heads, SEO experts
                                and event professionals.{" "}
                            </p>
                            <p className="mt-10">
                                We are brought together by our shared love of crafting experiences,
                                adding zing to projects and partnering with clients for a wholesome
                                experience. Here's what we focus on.
                            </p>
                            <ul className="mt-30 lest-icon">
                                <li>Creative</li>
                                <li>Digital</li>
                                <li>Ecommerce</li>
                                <li>Events</li>
                            </ul>
                            {/* <a href="#" class="link-custom v-light image-zoom mt-30" data-dsn="parallax">
                                  About Us
                              </a> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutSection