import React from 'react'
import Card from './Card'
import cardImage1 from '@/assets/services/developing.svg'
import cardImage2 from '@/assets/services/mobile.svg'
import cardImage3 from '@/assets/services/business.svg'
import cardImage4 from '@/assets/services/customize.svg'
import cardImage5 from '@/assets/services/development.svg'
import cardImage6 from '@/assets/services/creative.svg'

function AboutService() {
    return (
        <>
            <section
                className="services pb-section background-section dsn-container p-relative "
                data-dsn-title="Our Service"
            >
                <div className="section-title">
                    <span className="tag-heading p-10 mb-15 background-main heading-color">
                        Why Choose Us
                    </span>
                    <h2 className="heading-h2">
                        Because your brand deserves the best. And we can help.
                    </h2>
                </div>
                <div
                    className="d-grid dsn-isotope grid-md-2 grid-lg-3"
                    data-dsn-item=".service-item"
                >
                    <Card cardImage= {cardImage1} cardHeading = "Brand identity" cardAbout = "We can help you build the visual elements of your brand."/>
                    <Card cardImage= {cardImage2} cardHeading = "Digital infrastructure" cardAbout = "We can help you build a digital infrastructure to connect your brand at all touchpoints."/>
                    <Card cardImage= {cardImage3} cardHeading = "Marketing collaterals" cardAbout = "We can create material to help you communicate your brand identity."/>
                    <Card cardImage= {cardImage4} cardHeading = "Website management" cardAbout = "We undertake website design, development, hosting & management."/>
                    <Card cardImage= {cardImage5} cardHeading = "Content creation" cardAbout = "It may sound cliché, but content is really king (or queen!). And we can help."/>
                    <Card cardImage= {cardImage6} cardHeading = "SEO and Social media" cardAbout = "SEO and social media can complement each other. We can enable it."/>
                </div>
            </section>

        </>
    )
}

export default AboutService