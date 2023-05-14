/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import FadeInFromTop from "../components/Animations/FadeIn/FadeInFromTop"
import SecondaryButton from "../components/Clickable/SecondaryButton/SecondaryButton"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import PopularProducts from "../shared/PopularProducts/PopularProducts"

//=============================================================================

const NotFoundPage = () => {
  const pageTitle = "This page is not available"
  const timeout = 500
  const [animate, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  return (
    <>
      <SEO title="404: Not found" />
      <Container
        className="d-flex align-items-start align-items-lg-center justify-content-center"
        style={{ height: "80vh", minHeight: 500 }}
      >
        <FadeInFromTop animate={animate} timeout={timeout}>
          <div className="text-center">
            <h1
              data-title={`${pageTitle}`}
              className="main-heading pt-5 font-size-huge brushed-metal-text"
            >
              {pageTitle}
            </h1>
            <p className="mb-5">
              The page you are looking for might have been removed or
              temporarily unavailable.
              <br />
              Please follow the link below to visit <b>werkcomfortabel.eu</b>
            </p>
            <SecondaryButton
              onClick={() => navigate("/")}
              className="large-button-font-size"
              size="lg"
            >
              Return to Homepage
            </SecondaryButton>
          </div>
        </FadeInFromTop>
      </Container>
      <div
        style={{
          position: "relative",
          zIndex: -1,
        }}
      >
        <StaticImage
          style={{ position: "absolute", right: 0, bottom: 0 }}
          formats={["auto", "webp", "avif"]}
          src="../images/empty-room.png"
          height={"100%"}
          quality={60}
          alt=""
        />
      </div>
      <Container
        className="background-color-dark d-flex justify-content-center"
        style={{ padding: "10vh 0px" }}
        fluid
      >
        <div className="text-center text-light special-content px-5 p-md-0">
          <h1 className="main-heading pt-5">
            Chairs you might be interested in
          </h1>
          <p>
            Our Ergonomic Chairs are crafted from the finest raw materials and
            assembled with scrupulous attention to detail. Every component is
            designed, developed and produced in-house to the most exacting
            standards.
          </p>
          <PopularProducts />
        </div>
      </Container>
    </>
  )
}

export default NotFoundPage

//=============================================================================
