import React from 'react'
import Link from 'next/link'

function BlogContent(props) {
    return (
        <>
            <div className="blog-item p-relative pt-50 pb-50 border-bottom">
                <div className="blog-item-inner p-relative">
                    <div className="left-box">
                        <Link href={props.siteLink}>
                            <h4 className="title-block">
                                {props.upperHeading} <br /> {props.lowerHeading}
                            </h4>
                        </Link>
                        <div className="link mt-15">
                            <a className="font-caps heading-color" href="#">
                                {props.date}
                            </a>
                        </div>
                    </div>
                    <div className="right-box">
                        <p className="max-w570">
                            {props.about}
                        </p>
                        <div className="blog-category mt-15">
                            <Link className="font-caps heading-color" href={props.siteLink}>
                               {props.link}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogContent