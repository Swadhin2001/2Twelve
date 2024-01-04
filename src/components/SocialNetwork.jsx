import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SocialNetwork() {
    return (
        <div>
            <div className="social-network">
                <ul className="socials d-flex  flex-column ">
                    <li>
                        <a href="https://www.instagram.com/2twelve.in/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span>In</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/2twelve/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>Ln</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SocialNetwork