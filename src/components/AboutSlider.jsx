import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
// import sliderImage1 from '@/assets/about/3.jpg'

function AboutSlider() {
    return (
        <>
            <Swiper centeredSlides={true} slidesPerView={3} loop={true} spaceBetween={30} className='slider-about pb-section dsn-container  dsn-swiper p-relative'>
                <div className="swiper-container">
                    <div className="swiper-wrapper v-dark-head">

                        <SwiperSlide className='swiper-slide'>
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <Image
                                        className="cover-bg-img"
                                        src=""
                                        data-dsn-src="@/assets/about/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Development
                                </h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src=""
                                        data-dsn-src="@/assets/about/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Discriminate
                                </h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src=""
                                        data-dsn-src="@/assets/about/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Design
                                </h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src=""
                                        data-dsn-src="@/assets/about/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Improve
                                </h3>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper >
            {/* <div
                className="slider-about pb-section dsn-container  dsn-swiper p-relative "
                data-dsn-option='{"slidesPerView" : 2.3}'
            >
                <div className="swiper-container">
                    <div className="swiper-wrapper v-dark-head">
                        <div className="swiper-slide">
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/about/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Development
                                </h3>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/about/1.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Discriminate
                                </h3>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/about/2.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Design
                                </h3>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="box-item-inner p-relative h-v-70 d-flex justify-content-center align-items-center pl-20 pr-20"
                                data-swiper-parallax-scale="0.85"
                            >
                                <div className="w-100 h-100 p-absolute top-0" data-overlay={5}>
                                    <img
                                        className="cover-bg-img"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        data-dsn-src="@/assets/about/4.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3
                                    className="heading-h2 letter-stroke"
                                    data-swiper-parallax-opacity={0}
                                >
                                    Improve
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-absolute w-100 h-50 bottom-0 left-0 background-section" />
            </div> */}

        </>
    )
}

export default AboutSlider