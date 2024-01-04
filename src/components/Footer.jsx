import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import light_logo from '@/assets/logo/2Twelve-Logo-Final_White.svg'
import dark_logo from '@/assets/logo/2Twelve-Logo-Final_Black.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const [theme, setTheme] = useState('')

    return (
        <>
            <footer className="footer border-top background-section">
                <div className="dsn-container">
                    <div className="d-grid grid-sm-2">
                        <div className="footer-item">
                            <a href="" className="logo-footer m-auto">
                                {/* <img
                                    src=""
                                    alt=""
                                    width={170}
                                    height={50}
                                    className="logo-dark cover-bg-img"
                                /> */}
                                <Image src={light_logo} alt="" className="logo-dark" />
                                {/* <Image src={dark_logo} alt="" className="logo-dark" /> */}
                                {/* <img
                                    src="assets/img/logo/2Twelve-Logo-Final_Black.svg"
                                    alt=""
                                    width={170}
                                    height={50}
                                    className="logo-light cover-bg-img"
                                /> */}
                            </a>
                        </div>
                        <div className="footer-item text-right">
                            <h5 className="sm-title-block mb-10">Follow Us</h5>
                            <ul className="box-social">
                                <li data-dsn="parallax">
                                    <a href="https://www.instagram.com/2twelve.in/" target="_blank">
                                        {/* <i className="fab fa-instagram" /> */}
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li data-dsn="parallax">
                                    <a href="https://www.linkedin.com/company/2twelve/" target="_blank">
                                        {/* <i className="fab fa-linkedin" /> */}
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom d-grid grid-md-2 border-top pt-30 mt-30">
                        <div className="footer-item">
                            <div className="copyright">
                                <div className="copright-text over-hidden">
                                    © 2023 Made With
                                    <span style={{ color: "red" }}>❤</span> by{" "}
                                    <a
                                        className="a"
                                        data-hover-text="DSN Grid"
                                        href="https://www.ekavarna.in/"
                                        target="_blank"
                                    >
                                        TwoOneTwo Marketing Studio Pvt. Ltd.
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-item order-md-2">
                            <div className="nav-footer text-right">
                                <ul>
                                    <li className="d-inline-block over-hidden">
                                        <Link className="a-hover" data-dsn="parallax" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="d-inline-block over-hidden">
                                        <Link className="a-hover" data-dsn="parallax" href="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="d-inline-block over-hidden">
                                        <Link className="a-hover" data-dsn="parallax" href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer