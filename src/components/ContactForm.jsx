import React from 'react'

function ContactForm() {
    return (
        <>
            <div className="dsn-container contact-inner section-margin">
                <div className="section-title">
                    <span className="tag-heading background-section color-heading ">
                        Get in touch
                    </span>
                    <h2 className="heading-h2">How can we help you?</h2>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="form-box d-flex flex-column">
                            <h4 className="title-block p-relative mb-30 text-uppercase border-section-bottom">
                                Help us, Help you
                            </h4>
                            <form
                                id="contact-form"
                                className="form w-100"
                                method="post"
                                action="contact.php"
                                data-toggle="validator"
                            >
                                <div className="messages" />
                                <div className="input__wrap controls">
                                    <div className="form-group">
                                        <div className="entry-box">
                                            <label>Your name *</label>
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                placeholder="Type your name"
                                                required="required"
                                                data-error="name is required."
                                            />
                                        </div>
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group">
                                        <div className="entry-box">
                                            <label>Your E-Mail *</label>
                                            <input
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                placeholder="Type your Email Address"
                                                required="required"
                                                data-error="Valid email is required."
                                            />
                                        </div>
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="form-group">
                                        <div className="entry-box">
                                            <label>What's up?</label>
                                            <textarea
                                                id="form_message"
                                                className="form-control"
                                                name="message"
                                                placeholder="Tell us about you and your query"
                                                required="required"
                                                data-error="Please,leave us a message."
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="help-block with-errors" />
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className="image-zoom w-auto d-inline-block move-circle"
                                            data-dsn="parallax"
                                        >
                                            <input
                                                type="submit"
                                                defaultValue="Send Message"
                                                className="v-light"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-content xs-mt-block d-flex flex-column p-relative background-section style-box h-100">
                            <h4 className="title-block p-relative mb-30 text-uppercase border-section-bottom">
                                Contact Info
                            </h4>
                            <div className="content-bottom">
                                <div className="item">
                                    <h5 className="sm-title-block mb-15">Address</h5>
                                    <p>
                                        15/1 New No 48,
                                        <br /> Kanakapura Main Road, <br /> Yediyur Circle Basavanagudi,
                                        <br /> Bangalore 560004
                                    </p>
                                </div>
                                <div className="item">
                                    <h5 className="sm-title-block mb-15">Email</h5>
                                    <a href="mailto:info@dsngrid.com">hello@2twelve.in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm