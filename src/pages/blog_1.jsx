import React from 'react'
import LoadingPage from '@/components/LoadingPage'
import Menu from '@/components/Menu'
import SideBoxLeft from '@/components/SideBoxLeft'
import BlogHeader from '@/components/BlogHeader'
import BlogIntro from '@/components/BlogIntro'
import BlogbgBanner from '@/components/BlogbgBanner'
import image1 from '@/assets/CreativeAgencies.jpg'
import image2 from '@/assets/creativeAgencies_1.jpg'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

function blog_1() {
  return (
    <>
      {/* <LoadingPage/> */}
      <Menu />
      <div className="main-root">
        <SideBoxLeft pageName="Blog" textStroke="Creative. Digital. Ecommerce. Events." />
        <div id="dsn-scrollbar">
          <div class="inner-content">
            <BlogHeader image1={image1} image2={image1} image3={image1} image4={image1} upperHeading="Heard of Pantone Color of the Year?" lowerHeading="It Has Just Been Released" />

            <div className="wrapper">
              <div className="intro-project dsn-container section-margin">
                <div className="row">
                  <div className="col-lg-12">
                    <BlogIntro heading="Introduction" about="Creating effective ad copy is essential for successful advertising campaigns. Whether it's for social media, search engine marketing, or display ads, the right ad copy format can make a significant impact on the audience (and conversions). Copywriters of all sorts must be aware of these types of ad copies so that they use the right format when needed." />

                  </div>
                </div>
              </div>
              <BlogbgBanner image1={image2} image2={image2} image3={image2} image4={image2} />

              <BlogSection heading="What is an ad copy?" about={<fragment>
                <>
                  An ad copy is any content written with the objective of goading the reader to
                  take specific action. They are so ubiquitous; you must have seen them without
                  realizing what they were. For instance, 'Sale till stocks last! Hurry.'
                  Perhaps you've even acted on some of these. In that case, could you say that
                  the ad copy worked! <br />
                  <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                    Ad copies, when written strategically and with an eye on the final goal, can
                    bring the audience's attention to an important aspect of the message by
                    making it easily comprehendible. Here are 7 ad copy formats that have been
                    proven to work effectively.{" "}
                  </span>
                </>
              </fragment>} />
              <h1> Slider Section</h1>

              <div class="col-lg-12">
                <BlogIntro heading="Testimonial" about={<fragment>
                  <>
                    Testimonials are a great way to snag customers. Here, you share other
                    customers' positive experiences with your brand or service. Including their
                    name or photo with the testimonial gives it a sense of authenticity. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      For example,
                      <br />
                      <span style={{ marginTop: "2rem" }}>Amway</span>
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      I love Amway products. I have started sleeping well and am able to focus
                      better after taking them. My daughter is allergic to all the products in the
                      store. Now, we use Amway soaps and the allergy has disappeared. You would
                      want to try these products too! <br />
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      Oliver, NY <br />
                    </span>
                  </>
                </fragment>} />
              </div>

              <div class="col-lg-12 mt-50">
                <BlogIntro heading="Offer-Based" about={<fragment>
                  <>
                    Many people are looking for great deals, discounts, or rebates. So, these ad
                    copies appeal to people who like a good deal and are willing to spend money if
                    they think they are getting more value from the deal than they are paying for
                    it. These ads work best when you create a sense of urgency around them. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      For example,
                      <br />
                      <span style={{ marginTop: "2rem" }}>The Man Company </span>
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      Buy any three perfumes for just Rs. 499. Use code HNY499. Hurry, offer only
                      until 31st December 2023 midnight. <br />
                    </span>
                  </>
                </fragment>} />
              </div>

              <div class="col-lg-12 mt-50">
                <BlogIntro heading="Appeal to ego " about={<fragment>
                  <>
                    People want to hear that they are special. So, these ad copies massage their
                    egos. If you can appeal to this desire to feel special, you will get them to
                    take the action that you want. But take care that the copies are not too
                    generic. The ad copies that successfully appeal to the customers ego are often
                    very specific. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      For example,
                      <br />
                      <span style={{ marginTop: "2rem" }}>Raymonds - The Complete Man.</span>
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      It means, a successful man but not necessarily who has tried very hard to
                      get there. So, a common man who has become a success. <br />
                    </span>
                  </>
                </fragment>} />
              </div>

              <div className="col-lg-12 mt-50">
                <div className="intro-text p-relative">
                  <div className="inner">
                    <h2 className="title-block  border-section-bottom dsn-up">Listicle</h2>
                    <p className="dsn-up mt-30 max-w750 mb-30">
                      Some ad copies are presented with a list of benefits or features of the
                      product or service. You can make these ad copies more visually appealing
                      by using numbers, say benefit #1, #2, #3, so on. <br />
                      <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                        For example,
                        <br />
                        <span style={{ marginTop: "2rem" }}>Goa Tourism </span>
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        3 killer reasons to visit Goa during the rainy season <br />
                      </span>
                    </p>
                    <ul>
                      <li>Super economical </li>
                      <li>Few tourists around</li>
                      <li>Time and space to enjoy your solitude </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>


              <div className="col-lg-12 mt-50">
                <div className="intro-text p-relative">
                  <div className="inner">
                    <h2 className="title-block  border-section-bottom dsn-up">Comparison</h2>
                    <p className="dsn-up mt-30 max-w750 mb-30">
                      Some ad copies highlight the advantages their products or services have
                      over their competitors. You can support your claim with statistics or
                      customer testimonials. <br />
                      {/* <span style="margin-bottom: 2rem; margin-top: 2rem;">For example,<br> 
                                  <span style = "margin-top: 2rem;">Goa Tourism   </span>    
                              </span> */}
                      <span style={{ marginBottom: "2rem" }}>
                        3 Heres an example from Apple, where they are comparing the Mac with a
                        normal PC.
                      </span>
                      {/* Video Section */}
                    </p>
                    <div
                      className="dsn-container mb-100 mt-100 background-section"
                      data-dsn-animate="section"
                    >
                      <div className="max-w750 m-auto d-flex flex-column justify-content-center">
                        <iframe
                          width={800}
                          height={449}
                          src="https://www.youtube.com/embed/0eEG5LVXdKo?si=nQa_t4_BrGE8eeaN"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    <span style={{ marginBottom: "2rem" }}>
                      Apple was basically trying to portray their Mac as being charismatic and
                      laid-back, while the PC was basically unorganized in thought and
                      execution. Several ads were released around this concept and all of them
                      played on the same idea – that eventually, Mac is better.{" "}
                    </span>
                    <p />
                  </div>
                </div>
              </div>


              <div class="col-lg-12 mt-50">
                <BlogIntro heading="FOMO (Fear of Missing Out)" about={<fragment>
                  <>
                    FOMO ads try to create a sense of urgency and exclusivity. It is designed to
                    address the audience's innate fear of losing out on an offer, making them that
                    much more likely to take it up. If it is an offer, it is for a limited time
                    only. The same goes for special edition sales. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      For example,
                      <br />
                      <span style={{ marginTop: "2rem" }}>Amazon Great Indian Festival. </span>
                    </span>
                  </>
                </fragment>} />
              </div>

              <div class="col-lg-12 mt-50">
                <BlogIntro heading="Question-Answer" about={<fragment>
                  <>
                    Question-answer format ad copies are relatively simple. They pose a common
                    question (or concern) and then provide an answer. They also address potential
                    objections that customers might have to purchasing your product or service.{" "}
                    <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      For example,
                      <br />
                      <span style={{ marginTop: "2rem" }}>
                        https://www.youtube.com/watch?v=5sWMyB3ZwtA{" "}
                      </span>
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      It means, a successful man but not necessarily who has tried very hard to
                      get there. So, a common man who has become a success. <br />
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      Mummy: My phenyl detergent also cleans the toilet well enough. <br /> Akshay
                      Kumar: But if your son asks you why your toilet is so yellow despite, what
                      will you answer him? <br /> That is why we have the New Harpic. It is even
                      thicker than the old one. It sticks to surfaces even surely and removes
                      germs, stains, and smell. <br /> Mummy: Wow! We will use the new Harpic now!{" "}
                      <br /> <br />
                    </span>
                  </>
                </fragment>} />
              </div>

              <div class="col-lg-12 mt-50">
                <BlogIntro heading="Final words" about={<fragment>
                  <>
                    <span style={{ marginBottom: "2rem" }}>
                      In today's competitive advertising landscape, utilizing the right ad copy
                      format can make all the difference in capturing the attention of your target
                      audience and driving meaningful engagement. From evoking emotions to solving
                      problems, the above ad copy formats are proven to be highly effective in the
                      real world, accompanied by real-world examples to illustrate their impact.{" "}
                    </span>{" "}
                    <br />
                    <span style={{ marginBottom: "2rem" }}>
                      Marketing agencies and creative agencies that want to make a difference must
                      understand what makes a brand tick and incorporate the strengths in ad
                      copies that will effectively convey the benefits or main message of that
                      brand to the respective audiences. <br />
                    </span>
                  </>
                </fragment>} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default blog_1