import React from 'react'
import Image from 'next/image'

function BlogbgBanner(props) {
    return (
        <>
            <div className="bg-section dsn-container p-relative section-top ">
                <div className="z-index-1" data-dsn-grid="move-up">
                    <Image
                        className="cover-bg-img"
                        src={props.image1}
                        data-dsn-src= {props.image2}
                        data-dsn-srcset={`${props.image3} 1800w,${props.image4} 768w`}
                        alt=""
                    />
                </div>
                <div className="p-absolute before-z-index w-100 h-50 bottom-0 left-0 background-section" />
            </div>

        </>
    )
}

export default BlogbgBanner