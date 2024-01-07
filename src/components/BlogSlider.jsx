import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

function BlogSlider(props) {
    return (
        <>
            <Swiper spaceBetween={30} autoplay={{delay:1500, disableOnInteraction: false}} slidesPerView={2} loop={true} className="p-relative mb-section dsn-swiper" navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
            }} modules={[Navigation, Pagination, Autoplay]} pagination={true} centeredSlides={true}>

                    <SwiperSlide>
                        <Image
                            className="cover-bg-img image-bg"
                            data-swiper-parallax="20%"
                            style={{ height: 300 }}
                            src={props.image1}
                            data-dsn-src="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp"
                            data-dsn-srcset="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp 1800w,assets/img/project/project4/3-sm.jpg 768w"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            className="cover-bg-img image-bg"
                            data-swiper-parallax="20%"
                            style={{ height: 300 }}
                            src={props.image2}
                            data-dsn-src="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp"
                            data-dsn-srcset="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp 1800w,assets/img/project/project4/3-sm.jpg 768w"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            className="cover-bg-img image-bg"
                            data-swiper-parallax="20%"
                            style={{ height: 300 }}
                            src={props.image3}
                            data-dsn-src="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp"
                            data-dsn-srcset="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp 1800w,assets/img/project/project4/3-sm.jpg 768w"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            className="cover-bg-img image-bg"
                            data-swiper-parallax="20%"
                            style={{ height: 300 }}
                            src={props.image4}
                            data-dsn-src="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp"
                            data-dsn-srcset="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp 1800w,assets/img/project/project4/3-sm.jpg 768w"
                            alt=""
                        />
                    </SwiperSlide>
            </Swiper>
            {/* <div
                className="p-relative mb-section dsn-swiper"
                data-dsn-option='{"slidesPerView":"2","spaceBetween":30,"autoplay":true}'
            >
                <div className="p-absolute top-0 w-100 h-50 background-section" />
                <div className="swiper-container p-relative w-100 ">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide over-hidden">
                            <img
                                className="cover-bg-img image-bg"
                                data-swiper-parallax="20%"
                                style={{ height: 300 }}
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-dsn-src="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp"
                                data-dsn-srcset="assets/img/mtqa615g_peach-fuzz-_625x300_09_December_23.webp 1800w,assets/img/project/project4/3-sm.jpg 768w"
                                alt=""
                            />
                        </div>
                        <div className="swiper-slide over-hidden">
                            <img
                                className="cover-bg-img has-top-bottom image-bg"
                                data-swiper-parallax="20%"
                                style={{ height: 300 }}
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-dsn-src="assets/img/pantone-peach-fuzz-color-of-the-year-2023-designboom-01.webp"
                                data-dsn-srcset="assets/img/pantone-peach-fuzz-color-of-the-year-2023-designboom-01.webp 1800w,assets/img/project/project4/4-sm.jpg 768w"
                                alt=""
                            />
                        </div>
                        <div className="swiper-slide over-hidden">
                            <img
                                className="cover-bg-img has-top-bottom image-bg"
                                data-swiper-parallax="20%"
                                style={{ height: 300 }}
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-dsn-src="assets/img/pantone-peach-fuzz-color-of-the-year-2023-designboom-03.webp"
                                data-dsn-srcset="assets/img/pantone-peach-fuzz-color-of-the-year-2023-designboom-03.webp 1800w,assets/img/project/project4/5-sm.jpg 768w"
                                alt=""
                            />
                        </div>
                        <div className="swiper-slide over-hidden">
                            <img
                                className="cover-bg-img has-top-bottom image-bg"
                                data-swiper-parallax="20%"
                                style={{ height: 300 }}
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                data-dsn-src="assets/img/Pantone-13-1023-Peach-Fuzz-1.jpg"
                                data-dsn-srcset="assets/img/Pantone-13-1023-Peach-Fuzz-1.jpg 1800w,assets/img/project/project4/6-sm.jpg 768w"
                                alt=""
                            />
                        </div>
                    </div> */}
            <div className="dsn-pagination mt-30  d-flex justify-content-between">
                <div className="swiper-next image-swiper-button-next">
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
                <div className="swiper-pagination" />
                <div className="swiper-prev image-swiper-button-prev">
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
                </div>
            </div>
            {/* </div>
            </div> */}

        </>
    )
}

export default BlogSlider