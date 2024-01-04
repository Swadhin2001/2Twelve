import React from 'react'
import Image from 'next/image'
import ScrollTop from "@/assets/scroll_top.svg"

function ScrollToTop() {
    return (
        <>
            <div className="scroll-to-top">
                <Image src={ScrollTop} alt="" />
                <div className="box-number v-middle">
                    <span>0%</span>
                </div>
            </div>

        </>
    )
}

export default ScrollToTop