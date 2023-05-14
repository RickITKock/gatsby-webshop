/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useContext, useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import LineItemList from "../containers/Cart/LineItemList/LineItemList"
import StoreContext from "../context/StoreContext"
import PrimaryButton from "../components/Clickable/PrimaryButton/PrimaryButton"
import Card from "react-bootstrap/Card"
import CartSummary from "../containers/Cart/CartSummary/CartSummary"
import { Link } from "gatsby"
import ShopUspSection from "../shared/ShopUspSection/ShopUspSection"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import PageTitle from "../containers/content/PageTitle/PageTitle"
import FadeInFromTop from "../components/Animations/FadeIn/FadeInFromTop"
import PopularProducts from "../shared/PopularProducts/PopularProducts"
import SecondaryButton from "../components/Clickable/SecondaryButton/SecondaryButton"

//=============================================================================

const CartPage = () => {
  const [animate, setAnimation] = useState(false)
  const timeout = 500
  const {
    store: { checkout },
  } = useContext(StoreContext)
  let totalNumberOfItemsInCart = 0
  for (let i = 0; i < checkout.lineItems.length; i++) {
    totalNumberOfItemsInCart += checkout.lineItems[i].quantity
  }
  const isCartEmpty = totalNumberOfItemsInCart === 0

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  const directUserToCheckoutPage = () => {
    window.open(checkout.webUrl)
  }

  const CartMessageWhenEmpty = () => {
    return (
      <p className="text-secondary py-5 text-center m-0">
        Nothing to see here yet! Check out all the awesome things you can buy on{" "}
        <Link to={"/chairs"} className={"text-primary"}>
          WerkComfortabel.eu!
        </Link>
      </p>
    )
  }

  return (
    <>
      <SEO title="Shopping-Cart" />
      <Container className="p-0 stacked-gradient-background" fluid>
        <h1
          data-title="Your shopping cart"
          className="main-heading font-size-huge brushed-metal-text"
        >
          Your shopping cart
        </h1>
        <Container className="p-5 text-center">
          <Row>
            <Col>
              {isCartEmpty ? (
                <FadeInFromTop animate={animate} timeout={timeout}>
                  <Card body className="border-0 rounded-0 card-shadow-only">
                    <CartMessageWhenEmpty />
                  </Card>
                </FadeInFromTop>
              ) : (
                <LineItemList lineItems={checkout.lineItems} />
              )}
            </Col>
          </Row>
          <FadeInFromTop
            animate={!isCartEmpty}
            timeout={timeout}
            mountOnEnter
            unmountOnExit
          >
            <Row className="justify-content-end mt-5">
              <Col xs={12} lg={6}>
                <Card className="border-0 rounded-0 text-left card-shadow-only p-5">
                  <Card.Body>
                    <h3>Cart summary</h3>
                    <CartSummary
                      totalNumberOfItemsInCart={totalNumberOfItemsInCart}
                      subtotal={checkout.subtotalPrice}
                      taxes={checkout.totalTax}
                      total={checkout.totalPrice}
                    />
                    <SecondaryButton
                      disabled={isCartEmpty}
                      onClick={directUserToCheckoutPage}
                      className="large-button-font-size btn-block mt-5"
                      size="lg"
                    >
                      Proceed to checkout
                    </SecondaryButton>
                    {isCartEmpty ? (
                      <>
                        <br />
                        <p className={`text-danger m-0`}>Your cart is empty.</p>
                      </>
                    ) : (
                      <Row className={`mt-3`}>
                        <Col>
                          <span
                            className={`text-secondary`}
                            style={{ fontSize: "1.2rem" }}
                          >
                            WerkComfortabel.eu is required by law to collect
                            sales tax on orders shipped. Appropriate charges
                            will be added to your merchandise total and
                            displayed for your review at checkout. Unless
                            otherwise noted, all products are sold by
                            WerkComfortabel.eu.
                          </span>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </FadeInFromTop>
        </Container>
        <ShopUspSection />
        <div
          className="background-color-dark d-flex justify-content-center text-center text-light"
          style={{ padding: "10vh 0px" }}
        >
          <Container>
            <h1 className="main-heading pt-3">
              Chairs you might be interested in
            </h1>
            <p>
              Our Ergonomic Chairs are crafted from the finest raw materials and
              assembled with scrupulous attention to detail. Every component is
              designed, developed and produced in-house to the most exacting
              standards.
            </p>
            <PopularProducts />
          </Container>
        </div>
      </Container>
    </>
  )
}

export default CartPage

//=============================================================================
