/*****************************************************************************
@author Rick Kock
******************************************************************************/

// TODO: Add notifications

//=============================================================================

import * as React from "react"
import SEO from "../components/seo"
import Hero from "../containers/content/Hero/Hero"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby"
import Container from "react-bootstrap/Container"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import PopularProductsSection from "../shared/PopularProductsSection/PopularProductsSection"
import ShopUspSection from "../shared/ShopUspSection/ShopUspSection"

//=============================================================================

const Section = ({ children, ...rest }) => {
  return <section {...rest}>{children}</section>
}

const IndexPage = () => {
  // TODO: Add the rest of the content

  return (
    <>
      <SEO title="Home" />
      <Hero />
      <ShopUspSection />
      <Section style={{ backgroundColor: "#303437" }} className="py-5 py-lg-0">
        <Container className="p-0" fluid>
          <Row noGutters>
            <Col
              className="d-none d-lg-inline"
              style={{
                display: "inline-block`",
                position: "relative",
              }}
              lg={4}
            >
              <StaticImage
                src="../images/standing-desk-chair.jpg"
                layout="fullWidth"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to right, rgba(48, 52, 55, 0.8) 0%, rgb(48, 52, 55) 85%)",
                }}
              ></div>
            </Col>
            <Col className="d-flex align-items-center">
              <div
                style={{ display: "inline-block" }}
                className="text-light p-5"
              >
                <h1>This is the title</h1>
                <p>
                  Whether you're suffering from health complaints or not, a
                  high-quality ergonomic chair could significantly improve your
                  productivity and comfort. Here at WerkComfortabel we provide a
                  range of ergonomic chairs with features such as adjustable
                  lumbar support and adjustable arm. It makes for a splendid
                  seating experience. Add in very reliable customer service and
                  a great warranty, and you have yourself a really smart spend.
                </p>
                <Button
                  className="rounded-pill py-3"
                  size="lg"
                  variant="outline-light"
                  style={{
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                  }}
                  onClick={() => navigate("/chairs")}
                >
                  <b style={{ fontSize: "1.6rem" }}>Explore</b>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section style={{ backgroundColor: "white" }} className="py-5 py-lg-0">
        <Container className="p-0" fluid>
          <Row noGutters>
            <Col className="d-flex align-items-center">
              <div
                style={{ display: "inline-block" }}
                className="text-dark p-5"
              >
                <h1>This is the title</h1>
                <p>
                  Whether you're suffering from health complaints or not, a
                  high-quality ergonomic chair could significantly improve your
                  productivity and comfort. Here at WerkComfortabel we provide a
                  range of ergonomic chairs with features such as adjustable
                  lumbar support and adjustable arm. It makes for a splendid
                  seating experience. Add in very reliable customer service and
                  a great warranty, and you have yourself a really smart spend.
                </p>
                <Button
                  className="rounded-pill py-3"
                  size="lg"
                  variant="outline-dark"
                  style={{
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                  }}
                  onClick={() => navigate("/chairs")}
                >
                  <b style={{ fontSize: "1.6rem" }}>Explore</b>
                </Button>
              </div>
            </Col>
            <Col
              className="d-none d-lg-inline"
              style={{
                display: "inline-block",
                position: "relative",
              }}
              lg={4}
            >
              <StaticImage
                src="../images/standing-desk-chair.jpg"
                layout="fullWidth"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to left, rgba(255, 255, 255, 0.8) 0%, rgb(255, 255, 255) 85%)",
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "rgb(58, 65, 111)",
        }}
        className="py-5 py-lg-0"
      >
        <Container className="p-0" fluid>
          <Row noGutters>
            <Col
              className="d-none d-lg-inline"
              style={{
                display: "inline-block",
                position: "relative",
              }}
              lg={4}
            >
              <StaticImage
                src="../images/standing-desk-chair.jpg"
                layout="fullWidth"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to right, rgba(58, 65, 111, 0.8) 0%, rgb(58, 65, 111) 85%)",
                }}
              ></div>
            </Col>
            <Col className="d-flex align-items-center">
              <div
                style={{ display: "inline-block" }}
                className="text-light p-5"
              >
                <h1>This is the title</h1>
                <p>
                  Whether you're suffering from health complaints or not, a
                  high-quality ergonomic chair could significantly improve your
                  productivity and comfort. Here at WerkComfortabel we provide a
                  range of ergonomic chairs with features such as adjustable
                  lumbar support and adjustable arm. It makes for a splendid
                  seating experience. Add in very reliable customer service and
                  a great warranty, and you have yourself a really smart spend.
                </p>
                <Button
                  className="rounded-pill py-3"
                  size="lg"
                  variant="outline-light"
                  style={{
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                  }}
                  onClick={() => navigate("/chairs")}
                >
                  <b style={{ fontSize: "1.6rem" }}>Explore</b>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container
        className="p-0 p-md-5"
        fluid={true}
        style={{ backgroundColor: "#F3F0EF" }}
      >
        <h2 className="main-head text-center">Most Popular</h2>
        {/* <PopularProductsSection /> */}
      </Container>
    </>
  )
}

export default IndexPage

//=============================================================================
