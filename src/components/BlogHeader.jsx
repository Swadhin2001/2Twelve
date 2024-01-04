import React from 'react'
import Image from 'next/image'

function BlogHeader(props) {
    return (
        <>
            <header className="p-relative dsn-header-animation full-width over-hidden h-v-100 v-dark-head">
                <div className="box-content  align-items-center">
                    <div
                        className="hero-img p-absolute w-100  h-100 before-z-index z-index-0"
                        data-overlay={5}
                        data-dsn-ajax="img"
                    >
                        <Image
                            className="cover-bg-img dsn-hero-parallax-img "
                            src={props.image4}
                            data-dsn-src={props.image1}
                            data-dsn-srcset={`${props.image2} 1800w,${props.image3} 768w`}
                            alt=""
                        />
                    </div>
                    <div className="hero-content dsn-container">
                        <div
                            className="has-box-mod p-relative move-circle"
                            data-dsn="parallax"
                            data-dsn-color="#2c2e30"
                        >
                            <h4 className="title " data-dsn-ajax="title">
                                {props.upperHeading} <br />
                                {props.lowerHeading}
                            </h4>
                        </div>
                        <div className="metas mt-25">
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default BlogHeader