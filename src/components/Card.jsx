import React from 'react'
import Image from 'next/image'

function Card(props) {
    return (
        <>
            <div className="service-item p-relative border">
                <div className="service-item-inner style-box">
                    <div className="icon">
                        <Image src={props.cardImage} alt="" />
                    </div>
                    <div className="content-box">
                        <h4 className="title-block mt-20">{props.cardHeading}</h4>
                        <p className="description mt-20">{props.cardAbout}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card