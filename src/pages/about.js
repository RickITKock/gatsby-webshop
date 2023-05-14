/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import FadeInFromTop from "../components/Animations/FadeIn/FadeInFromTop"
import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//=============================================================================

const BlogPage = () => {
  const timeout = 500
  const [animate, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  return (
    <>
      <SEO title="About WerkComfortabel" />
      <Container className="p-0" fluid>
        <h1
          data-title="About us"
          className="main-heading font-size-huge brushed-metal-text"
        >
          About us
        </h1>
        <h5
          className="formal-text text-center m-0"
          style={{ color: "#634f2c" }}
        >
          Learn more about
        </h5>
        <div
          className="d-flex justify-content-md-center align-items-center flex-column flex-md-row"
          style={{ color: "#634f2c" }}
        >
          <h5 className="formal-text text-center d-inline m-0">who we are</h5>
          <span
            className="main-heading p-0"
            style={{ color: "#d9d9d9", fontSize: "12rem", lineHeight: "1em" }}
          >
            &amp;
          </span>
          <h5 className="formal-text text-center d-inline m-0">what we do</h5>
        </div>
        <Container className="p-5 text-center">
          <FadeInFromTop animate={animate} timeout={timeout}>
            <h3>How it all started...</h3>
            <p>
              We are Rick Kock and Fillette Halley, the owners and
              web-developers of WerkComfortabel. We endured wrong sitting
              positions for a prolonged time, until recently after entering the
              realm of ergonomics!
            </p>
            <h3>Mission</h3>
            <p>
              How many hours do you spend every day sitting at your desk? On
              average we spend 40 hours a week at our desk. Devoting hours a day
              sitting and working will take a toll on your body. So, it is no
              surprise that your choice of chair has a big impact on your
              productivity.
            </p>
            <p>
              Our mission here at WerkComfortabel is to offer a wide variety of
              high-quality adjustable Ergonomic Chairs that will cater to your
              health, productivity, and overall working experience with high
              customer satisfaction in mind. We strive to make people more aware
              about their work equipment choices and how they can affect their
              health.
            </p>
            <h3>Our brands</h3>
            <Row className="py-5">
              <Col xs={12} sm={4} className="pb-5 p-sm-0">
                <StaticImage
                  placeholder="tracedSVG"
                  src="../images/company-logos/capital-seat-logo.svg"
                  alt="capital seat logo"
                />
              </Col>
              <Col xs={12} sm={4} className="pb-5 p-sm-0">
                <StaticImage
                  placeholder="tracedSVG"
                  src="../images/company-logos/couch-night-logo.svg"
                  alt="couch night logo"
                />
              </Col>
              <Col>
                <StaticImage
                  placeholder="tracedSVG"
                  src="../images/company-logos/favorite-chair-logo.svg"
                  alt="favorite chair logo"
                />
              </Col>
            </Row>
            <h3>We're here to help</h3>
            <p className="mb-5">
              Our webshop is designed in such a way to accommodate you in
              finding the right chair to suit your specific needs and style.
              Health is the biggest wealth in life. So, feel free to look at
              what we have here at WerkComfortabel and find the chair that suits
              you, whether you are working from home or commuting to the office.
            </p>
            <p>
              Our friendly team of Customer Champions are at the ready to help
              you, whatever your needs in light of our services. They are also
              very friendly and open to any questions you might have. If you
              need any help, feel free to reach them using the information
              below.
            </p>
            <Row>
              <Col xs={12} md={6}>
                <p className="d-block">
                  <span className="label-font color-seal-brown">email us</span>
                  <br />
                  info@werkcomfortabel.eu
                </p>
              </Col>
              <Col>
                <p className="d-block">
                  <span className="label-font color-seal-brown">call us</span>
                  <br />
                  +31 (0)85 004 1279
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <p className="d-block">
                  <span className="label-font color-seal-brown">address</span>
                  <br />
                  Laakweg 24N, 2521 SC, the Hague <br />
                  Netherlands (no return or visiting address)
                </p>
              </Col>
              <Col>
                <p className="d-block">
                  <span className="label-font color-seal-brown">available</span>
                  <br />
                  Mo-Sat 9:00 - 18:00
                </p>
              </Col>
            </Row>
          </FadeInFromTop>
        </Container>
      </Container>
    </>
  )
}

export default BlogPage

//=============================================================================
