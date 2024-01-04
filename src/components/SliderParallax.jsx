import React from 'react'

function SliderParallax() {
    return (
        <>
            <div className="p-relative h-100">
                <div className="main-slider full-width has-horizontal dsn-header-animation  v-dark-head">
                    <div className="swiper-container slide-inner bg-container dsn-hero-parallax-img  h-100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide over-hidden">
                                <div
                                    className="image-bg w-100 h-100 "
                                    data-overlay={5}
                                    data-swiper-parallax="50%"
                                >
                                    <img
                                        className="cover-bg-img"
                                        data-dsn-position="10% 10%"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/project/project1/1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="slide-content p-absolute">
                                    <div className="content p-relative">
                                        <div className="metas d-inline-block mb-25">
                                        </div>
                                        <div className="d-block" />
                                        <a
                                            href=""
                                            className="effect-ajax has-box-mod move-circle"
                                            data-dsn="parallax"
                                            data-dsn-color="#17252b"
                                            data-dsn-ajax="slider"
                                        >
                                            <h1 className="title">
                                                We Aspire to Transform. <br />
                                                Not Change.
                                            </h1>
                                        </a>
                                        <p className="description border-before mt-25 max-w570">
                                            Everything we do is about you.
                                            <br /> We go the extra mile.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide over-hidden">
                                <div
                                    className="image-bg w-100 h-100 "
                                    data-overlay={5}
                                    data-swiper-parallax="50%"
                                >
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/project/project2/1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="slide-content p-absolute">
                                    <div className="content p-relative">
                                        <div className="metas d-inline-block mb-25">
                                            {/* <span>Photography</span>
                                              <span>Car</span> */}
                                        </div>
                                        <div className="d-block" />
                                        <a
                                            href=""
                                            className="effect-ajax has-box-mod move-circle"
                                            data-dsn="parallax"
                                            data-dsn-color="#284762"
                                            data-dsn-ajax="slider"
                                        >
                                            <h1 className="title">
                                                We Give Brands <br /> New Perspectives
                                            </h1>
                                        </a>
                                        <p className="description border-before mt-25 max-w570">
                                            The market is always changing. <br />
                                            Brands that don’t, risk being left behind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide over-hidden">
                                <div
                                    className="image-bg w-100 h-100 "
                                    data-overlay={5}
                                    data-swiper-parallax="50%"
                                >
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/project/project3/1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="slide-content p-absolute">
                                    <div className="content p-relative">
                                        <div className="metas d-inline-block mb-25">
                                            {/* <span>Architecture</span> */}
                                        </div>
                                        <div className="d-block" />
                                        <a
                                            href=""
                                            className="effect-ajax has-box-mod move-circle"
                                            data-dsn="parallax"
                                            data-dsn-color="#393531"
                                            data-dsn-ajax="slider"
                                        >
                                            <h1 className="title">
                                                The Brand Wheel <br /> Doesn't Stop Turning
                                            </h1>
                                        </a>
                                        <p className="description border-before mt-25 max-w570">
                                            We want brands to thrive, not just survive. <br /> And we know
                                            just what to do.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dsn-slider-content p-absolute h-100 w-100 ">
                        <div className="dsn-container  d-flex align-items-center">
                            <div className="slider-current-index">01</div>
                        </div>
                    </div>
                    <div className="control-nav p-absolute w-100  d-flex dsn-container align-items-center  justify-content-between ">
                        {/* <div class="dsn-pagination p-relative w-50">
                              <div class="slider-current-index">01</div>
                              <div class="swiper-pagination-control"></div>
                              <div class="slider-total-index"></div>
                          </div> */}
                        <div className="d-flex">
                            <div className="prev-container">
                                <div className="container-inner">
                                    <div className="triangle" />
                                    <svg
                                        className="circle"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            className="circle-wrap"
                                            fill="none"
                                            strokeWidth={1}
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                        >
                                            <circle cx={12} cy={12} r="10.5" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="next-container">
                                <div className="container-inner">
                                    <div className="triangle" />
                                    <svg
                                        className="circle"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            className="circle-wrap"
                                            fill="none"
                                            strokeWidth={1}
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                        >
                                            <circle cx={12} cy={12} r="10.5" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SliderParallax