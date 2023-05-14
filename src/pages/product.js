/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Ratings from "../components/Classification/Rating/Ratings/Ratings"
import { MdFlare } from "react-icons/md"
import { ImCheckmark } from "react-icons/im"
import PrimaryButton from "../components/Clickable/PrimaryButton/PrimaryButton"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
// import PopularProductsSection from "../shared/PopularProductsSection/PopularProductsSection"

//=============================================================================

const ProductPage = () => {
  // TODO: Add the main image container
  // TODO: Add secondary images
  // TODO: Add arrows
  // TODO: Add image number to top right
  // TODO: Add sale label
  // TODO: Add arrow actions
  // TODO: Add on click secondary image
  // TODO: Add reviews

  return (
    <>
      <SEO title="Product" />
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Ratings /> 91% rating from 276 Reviews.
              <h2>This is the name of the chair</h2>
              <ImCheckmark /> This is USP1 <br />
              <ImCheckmark /> This is USP2 <br />
              <ImCheckmark /> This is USP3
              <PrimaryButton
                className={`btn-block my-3 py-3`}
                onClick={() => alert("Add to cart button")}
              >
                Add to Cart
              </PrimaryButton>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="description"
              >
                <Container fluid>
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="description">
                            Description
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="delivery">Delivery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="payment">Payment</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="returns">Returns</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="description">Description</Tab.Pane>
                        <Tab.Pane eventKey="delivery">Delivery</Tab.Pane>
                        <Tab.Pane eventKey="payment">Payment</Tab.Pane>
                        <Tab.Pane eventKey="returns">Returns</Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Container>
              </Tab.Container>
            </Col>
          </Row>
          <Row className="my-3 text-center">
            <Col className="p-5">
              <h1 className="article-title-font main-head">
                Learn more about ...
              </h1>
              <p>This is the top row</p>
            </Col>
          </Row>
          <Row className="mt-3 text-center">
            <Col className="py-5">
              <h2 className="article-title-font">Lumbar support</h2>
              <p>
                Benefit explanation. Benefit explanation. Benefit explanation.
              </p>
            </Col>
            <Col className="py-5">
              <h2 className="article-title-font">Tilt lock</h2>
              <p>
                Benefit explanation. Benefit explanation. Benefit explanation.
              </p>
            </Col>
            <Col className="py-5">
              <h2 className="article-title-font">Ergonomic</h2>
              <p>
                Benefit explanation. Benefit explanation. Benefit explanation.
              </p>
            </Col>
          </Row>
        </Container>
        <h1 className="article-title-font text-center main-head">
          Similar Items
        </h1>
        {/* <PopularProductsSection /> */}
      </div>
    </>
  )
}

export default ProductPage

//=============================================================================
