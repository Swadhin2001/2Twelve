import React from 'react'
import Link from 'next/link'
// import styles from '../styles/plugins'

function NextPage() {
    return (
        <>
            <div
                className="next-page dsn-container section-padding p-relative"
                data-dsn-title="Contact Us"
            >
                <div className="full-bg background-section p-absolute h-100 before-z-index" />
                <span className="tag-heading background-main heading-color p-10">
                    Let’s Talk
                </span>
                <h2 className="title max-w570">
                    <span className="letter-stroke"> #Experience </span>
                    <span className="line-bg-left pl-80">Excellence</span>
                    <br />
                </h2>
                <Link
                    href="/contact"
                    className="link-custom effect-ajax image-zoom move-circle background-section p-relative mt-30 v-light"
                    data-dsn="parallax"
                >
                    Say Hello
                    <div
                        className="icon-circle"
                        style={{ transformOrigin: "0px 0px", transform: "translate(0px, 0px)" }}
                    />

                </Link>
            </div>

        </>
    )
}

export default NextPage