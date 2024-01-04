import React from 'react'
import ScrollToTop from './ScrollToTop'
import MenuIcon from './MenuIcon'
import LightDarkButton from './LightDarkButton'
import SocialNetwork from './SocialNetwork'

function SideBoxLeft(props) {
    return (
        <>
            <div className="side-bar-full">
                <div className="side-box-left ">
                    <div className="side-menu border-left border-right p-relative h-100 d-flex justify-content-center">
                        <div className="page-active">
                            <h2 className="text-uppercase">{props.pageName}</h2>
                        </div>
                    </div>
                </div>
                <div className="side-box-right text-stroke border-right text-uppercase">
                    <div className="text-inner over-hidden">
                        <div className="text-stroke-box">
                            <div className="text-stroke-inner">{props.textStroke}{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <MenuIcon/> */}
            <SocialNetwork/>
            <LightDarkButton/>
            <ScrollToTop/>

        </>
    )
}

export default SideBoxLeft