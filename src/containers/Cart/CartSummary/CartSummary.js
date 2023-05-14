/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { getFormattedPrice } from "../../../utils/PriceFormatter"
import PropTypes from "prop-types"
import FreeBadge from "../../../components/Classification/Badges/FreeBadge/FreeBadge"

//=============================================================================

// TODO: Show a fun image when the there are no items added to cart
// TODO: Calculate shipping costs if treshold is not met

const ShoppingCartSummary = ({
  totalNumberOfItemsInCart,
  subtotal,
  taxes,
  total,
  ...others
}) => {
  const orderCostTreshold = 80
  const shippingCost = subtotal < orderCostTreshold ? orderCostTreshold : 0
  const formattedSubtotal = getFormattedPrice(subtotal)
  const formattedTaxesPrice = getFormattedPrice(taxes)
  const formattedTotal = getFormattedPrice(parseFloat(total) + shippingCost)

  // TODO: Change column width format: it needs to be more flexible than just using "xs"
  // TODO: Change this style of code, if a row is a row, don't use columns!
  const CartSummaryRow = ({ label, columnWidth, children, ...others }) => {
    return (
      <Row {...others}>
        <Col xs={columnWidth}>
          <div>
            <p className="my-2">{label}</p>
          </div>
        </Col>
        <Col>{children}</Col>
      </Row>
    )
  }

  const CartSummaryRowWithText = ({ children, ...others }) => {
    return (
      <CartSummaryRow {...others}>
        <p className="text-success text-right my-2">{children}</p>
      </CartSummaryRow>
    )
  }

  const Seperator = () => {
    return (
      <Row>
        <Col>
          <div className={`border-bottom border-light my-2`}></div>
        </Col>
      </Row>
    )
  }

  return (
    <div {...others}>
      {/* <h3 className="formal-text">Cart summary</h3> */}
      {totalNumberOfItemsInCart > 0 && (
        <div>
          <CartSummaryRowWithText
            label={`Subtotal (${totalNumberOfItemsInCart} ${
              totalNumberOfItemsInCart !== 1 ? "items)" : "item)"
            }`}
          >
            {formattedSubtotal}
          </CartSummaryRowWithText>
          {/* <Seperator /> */}
          <CartSummaryRow label={`Shipping`}>
            <FreeBadge
              style={{ paddingTop: "0.45rem", paddingBottom: "0.45rem" }}
              className={`float-right my-2`}
            />
          </CartSummaryRow>
          {/* <Seperator /> */}
          <CartSummaryRowWithText label={`Taxes`}>
            {formattedTaxesPrice}
          </CartSummaryRowWithText>
          {/* <Seperator /> */}
          <CartSummaryRowWithText label={`Total`}>
            {formattedTotal}
          </CartSummaryRowWithText>
          {/* <Seperator /> */}
        </div>
      )}
    </div>
  )
}

ShoppingCartSummary.propTypes = {
  numberOfItems: PropTypes.number,
  subtotal: PropTypes.number,
  taxes: PropTypes.number,
  total: PropTypes.number,
}

ShoppingCartSummary.defaultProps = {
  numberOfItems: 0,
  subtotal: 0.0,
  taxes: 0.0,
  total: 0.0,
}

export default ShoppingCartSummary

//=============================================================================
