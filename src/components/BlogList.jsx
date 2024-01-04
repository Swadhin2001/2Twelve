import React from 'react'
import Link from 'next/link'
import BlogContent from './BlogContent'

function BlogList() {
    return (
        <>
            <section
                className="blog dsn-container p-relative section-margin"
                data-dsn-title="Our Blog"
            >
                <div className="section-title">
                    <span className="tag-heading p-10 mb-15 background-section heading-color">
                        Latest post
                    </span>
                    <h2 className="heading-h2">Latest And Greatest Post</h2>
                </div>
                <div className="blog-content">
                    <BlogContent upperHeading = "Pantone Color" lowerHeading = "of the year" date = "December 20,2023" about = "The Pantone Color of the Year for 2023 was Viva Magenta. It is a color derived from red and..." link = "/ Creativity" siteLink = "/blog"/>

                    <BlogContent upperHeading = "Creativity, Creative" lowerHeading = "and marketing agencies" date = "December 20,2023" about = "Creativity, Creative and marketing agencies, Digital marketing, Search engine optimization" link = "/ Creativity" siteLink = "/blog_1"/>
                </div>
            </section>

        </>
    )
}

export default BlogList