import React from 'react'

function BlogIntro(props) {
    return (
        <>
            <div className="intro-text p-relative">
                <div className="inner">
                    <h2 className="title-block  border-section-bottom dsn-up">{props.heading}</h2>
                    <p className="dsn-up mt-30 max-w750">{props.about}</p>
                </div>
            </div>
        </>
    )
}

export default BlogIntro