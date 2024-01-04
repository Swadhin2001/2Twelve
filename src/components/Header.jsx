import React from 'react'

function ContactHeader(props) {
    return (
        <>
            <header className="header-pages dsn-container mb-section header-padding-top background-main">
                <div className="box-title ">
                    <h1 className="title">
                        <span className="letter-stroke">{props.upperHeading}</span> <br />
                        <span className="line-bg-left pl-80">{props.lowerHeading}</span>
                    </h1>
                    <div className="mt-30 d-flex w-100 justify-content-end">
                        <p className="border-left pl-20 max-w570">{props.about}</p>
                    </div>
                </div>
            </header>

        </>
    )
}

export default ContactHeader