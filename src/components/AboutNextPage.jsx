import React from 'react'
import Link from 'next/link'

function AboutNextPage(props) {
    return (
        <>
            <section
                className="next-page background-section dsn-container pb-section"
                data-dsn-title="Contact Us"
            >
                <Link href="/contact" className="effect-ajax">
                    <h2 className="title">
                        <span className="letter-stroke">{props.upLetterStroke} </span> <br />
                        <span className="line-bg-left pl-80">{props.downLetterStroke}</span>
                    </h2>
                </Link>
            </section>

        </>
    )
}

export default AboutNextPage