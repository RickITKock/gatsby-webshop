/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import PageTitle from "../containers/content/PageTitle/PageTitle"
import Card from "react-bootstrap/Card"
import FadeInFromTop from "../components/Animations/FadeIn/FadeInFromTop"

//=============================================================================

const BlogPage = () => {
  const timeout = 500
  const [animate, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  return (
    <>
      <SEO title="Shipping and Delivery" />
      <Container className="p-0" fluid>
        <PageTitle>
          <h1>Shipping &amp; Delivery</h1>
          <h5 className="formal-text mx-5">
            Free Shipping on All Orders in the Netherlands
          </h5>
        </PageTitle>
        <Container className="my-5">
          <Card
            className={`border-0 card-shadow-only card-background-color`}
            style={{
              borderRadius: "0.5rem",
            }}
          >
            <Card.Body className={`px-5 py-4`}>
              <FadeInFromTop animate={animate} timeout={timeout}>
                <h2>Shipping</h2>
                <p>
                  Javorzo offers every order within The Netherlands free of
                  charge. Within The Netherlands your order will be shipped with
                  the standard service of PostNL. Other European countries will
                  be charged &euro;12.
                </p>
                <p>
                  If you have any question, please don't hesitate to contact us.
                  We will look for a suitable solution to serve you as best as
                  we can!
                  <br />
                  <br />
                  Email: <b>info@werkcomfortabel.eu</b>
                  <br />
                  Phone: <b>+31 (0)85 004 1279</b>
                </p>
                <h2>Delivery</h2>
                <p>
                  Your order will be shipped once payment has been approved and
                  the delivery and billing address has been verified. We ship
                  and deliver orders on weekdays. Javorzo does not deliver on
                  Sundays and/or National Holidays.
                  <br />
                  <br />
                  Standard delivery will be within 3 working days in The
                  Netherlands. For orders outside The Netherlands, delivery time
                  vary per country. Within Europe expected delivery time will be
                  3 - 5 working days.
                </p>
              </FadeInFromTop>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  )
}

export default BlogPage

//=============================================================================
