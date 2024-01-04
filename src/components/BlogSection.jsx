import React from 'react'

function BlogSection(props) {
    return (
        <div>
            <div
                className="dsn-container mb-100 mt-100 background-section"
                data-dsn-animate="section"
            >
                <div className="max-w750 m-auto d-flex flex-column justify-content-center">
                    <h4 className="title-block dsn-text mb-20">
                        {props.heading}
                    </h4>
                    <p className="dsn-up">{props.about}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogSection