import BlogHeader from '@/components/BlogHeader'
import LoadingPage from '@/components/LoadingPage'
import SideBoxLeft from '@/components/SideBoxLeft'
import React from 'react'
import image1 from '@/assets/Viva-magenta-pantone-3-scaled.webp'
import Menu from '@/components/Menu'
import BlogIntro from '@/components/BlogIntro'
import BlogbgBanner from '@/components/BlogbgBanner'
import image2 from '@/assets/yAdQZNexuSBuazghqy7Tdc.jpeg'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import BlogSlider from '@/components/BlogSlider'
import sliderImage1 from '@/assets/mtqa615g_peach-fuzz-_625x300_09_December_23.webp'
import sliderImage2 from '@/assets/pantone-peach-fuzz-color-of-the-year-2023-designboom-01.webp'
import sliderImage3 from '@/assets/pantone-peach-fuzz-color-of-the-year-2023-designboom-03.webp'
import sliderImage4 from '@/assets/Pantone-13-1023-Peach-Fuzz-1.jpg'


function blog() {
  return (
    <>
      {/* <LoadingPage/> */}
      <Menu />
      <div className="main-root">
        <SideBoxLeft pageName="Blog" textStroke="Creative. Digital. Ecommerce. Events." />
        <div id="dsn-scrollbar">
          <div className="inner-content">
            <BlogHeader image1={image1} image2={image1} image3={image1} image4={image1} upperHeading="Heard of Pantone Color of the Year?" lowerHeading="It Has Just Been Released" />
            <div className="wrapper">
              <div className="intro-project dsn-container section-margin">
                <div className="row">
                  <div className="col-lg-12">
                    <BlogIntro heading="introduction to the Blog" about={<fragment><>
                      Every year, around this time, Pantone releases a Color of the Year, for the
                      coming year. <br />
                      <span style={{ marginBottom: "2rem" }}>
                        Before we go there, let us peek into the year that was. <br />
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        The Pantone Color of the Year for 2023 was{" "}
                        <strong style={{ color: "#BB2649" }}> Viva Magenta</strong>. It is a color
                        derived from red and it is deeply rooted in nature. It is inspired by
                        Cochineal, a very rare dye, made from the insect of the same name. Pantone
                        describes Viva Magenta as representing vigor, vim, and exuberance. <br />
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        People in the art realm wait with bated breath for Pantone's Color of the
                        Year and as expected, it holds a lot of significance for marketing and
                        creative agencies, in short, everyone who follows color trends, may it be
                        designers, art studios, and artists. <br />
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        And now for the reveal! <br />{" "}
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        The Pantone Color of the Year for 2024 is{" "}
                        <strong style={{ color: "#ffbe98" }}> Peach Fuzz</strong>. <br />{" "}
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        In the words of the Pantone, Peach Fuzz represents warmth, modern elegance,
                        compassion, and attempts to bridge youthfulness with timelessness. <br />{" "}
                      </span>
                      <span style={{ marginBottom: "2rem" }}>
                        The Pantone Color of the Year is chosen after a lot of careful deliberation
                        and consultation among members of Pantone Institute, and you can be sure it
                        is not lightly taken.{" "}
                      </span>
                    </>
                    </fragment>} />
                  </div>
                </div>
              </div>

              <BlogbgBanner image1={image2} image2={image2} image3={image2} image4={image2} />

              <BlogSection heading="Selection process of Pantone Color of the Year" about={<fragment>
                Experts from the Pantone Color Institute analyze trends across various
                industries such as fashion, art, design, and entertainment to identify the
                color that is trending and resonates the most with the moment. <br />
                <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                  They also consider global events, socio-economic conditions, and current
                  affairs to understand the prevailing mood and its influence on color
                  preferences. <br />
                </span>
                <span style={{ marginBottom: "2rem" }}>
                  This selection process involves a meticulous analysis of color
                  influences and a deep understanding of vox populi, resulting in the
                  choice of a color that reflects the current cultural climate. <br />
                </span>
              </fragment>} />

              <BlogSection heading="The significance of Pantone Color of the Year " about={<fragment>
                <>
                  The Pantone Color of the Year serves as a symbolic representation of the
                  collective mood and attitude of the global community. It influences the design
                  and creative decisions of various creative industries, making it a crucial
                  factor for all stakeholders. <br />
                  <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                    {" "}
                    Since we are an agency too, you can understand why we are so excited about
                    the Pantone Color of the Year for 2024. <br />
                  </span>
                  <span style={{ marginBottom: "2rem" }}>
                    Basically, the color sets the tone for trends in fashion, interiors, product
                    design, and graphic design. And if you are an agency, you know it will
                    affect marketing strategies and creative campaigns across the board. <br />
                  </span>
                </>

              </fragment>} />

              {/* <h1>Blog Slider</h1> */}
              <BlogSlider image1 = {sliderImage1} image2 = {sliderImage2} image3 = {sliderImage3} image4 = {sliderImage4}/>

              <BlogSection heading="Utility for Marketing Agencies" about={<fragment>
                <>
                  Marketing agencies utilize the Pantone Color of the Year to create visually
                  impactful campaigns that resonate with the current consumer sentiment. <br />
                  <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                    Incorporating the color in branding elements, advertisements, and packaging
                    helps to maintain relevancy and demonstrates an understanding of
                    contemporary trends. <br />{" "}
                  </span>
                  <span style={{ marginBottom: "2rem" }}>
                    It allows marketing agencies to align their branding and messaging with the
                    prevailing cultural mood, fostering a deeper connection with their target
                    audience. <br />
                  </span>
                </>
              </fragment>} />

              <BlogSection heading="Utility for Creative Agencies" about={<fragment>
                <>
                  Creative agencies leverage the Pantone Color of the Year as a source of
                  inspiration for their designs, ensuring that their work remains contemporary
                  and resonates with the current aesthetic preferences. <br />
                  <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                    It serves as a guide for creating cohesive visual identities for their
                    clients, aligning their designs with the color of the year to convey a
                    modern and trend-conscious image. <br />
                  </span>
                  <span style={{ marginBottom: "2rem" }}>
                    {" "}
                    The color often becomes a central element in the creative process,
                    influencing choices in graphic design, typography, and overall visual
                    communication. <br />
                  </span>
                </>

              </fragment>} />
              <div className="col-lg-12 mt-50">
                <BlogIntro heading="Versatility" about={<fragment>
                  <>
                    Despite being designated as the color of the year, the chosen hue often
                    transcends its temporal significance and continues to influence design and
                    marketing strategies beyond the year of its selection. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      Its versatility allows for seamless integration into a wide range of
                      products, designs, and campaigns, ensuring its enduring relevance in the
                      creative and marketing landscape. <br />
                    </span>
                  </>
                </fragment>} />
              </div>
              <div className="col-lg-12 mt-50">
                <BlogIntro heading="Conclusion" about={<fragment>
                  <>
                    In conclusion, the Pantone Color of the Year plays a pivotal role in shaping
                    creative and marketing endeavors, serving as a barometer of contemporary
                    tastes and sentiments. Its selection process, significance, and utility for
                    marketing and creative agencies underscore its far-reaching impact on the
                    visual and cultural landscape. <br />
                    <span style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      At 2twelve, we are deeply aware of the relevance and importance of the kind
                      of work that we do for our clients. And when you are doing such work, you
                      can't avoid being influenced by some aspects of it yourself. <br />
                    </span>
                    <span style={{ marginBottom: "2rem" }}>
                      So, forgive us if we are excited about the Pantone Color of the Year for
                      2024, which one could naturally expect, because we know its significance. If
                      you are a color buff, do keep an eye out for Peach Fuzz online and you will
                      be pleasantly surprised to see where it turns up.
                      <br />
                    </span>
                  </>
                </fragment>} />
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default blog