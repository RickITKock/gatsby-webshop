/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import Col from "react-bootstrap/Col"
import { getFormattedPrice } from "../../../../utils/PriceFormatter"

//=============================================================================

const PriceColumn = ({ lg, md, sm, xs, item, children }) => {
  const compareAtPricePerItem = item.variant.compareAtPrice
  const pricePerItem = item.variant.price
  const totalPricePerItem = item.variant.price * item.quantity

  return (
    <Col
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>
        <div style={{ display: "block", fontSize: "1.4rem" }}>
          <b>{getFormattedPrice(totalPricePerItem)}</b>{" "}
          {item.quantity === 1 && (
            <small>
              {compareAtPricePerItem > pricePerItem && (
                <s>{getFormattedPrice(compareAtPricePerItem)}</s>
              )}
            </small>
          )}
          {item.quantity > 1 && (
            <>
              <br />
              <small>
                ({getFormattedPrice(pricePerItem)}{" "}
                {compareAtPricePerItem > pricePerItem && (
                  <s>{getFormattedPrice(compareAtPricePerItem)}</s>
                )}{" "}
                per item)
              </small>
            </>
          )}
        </div>
        <br />
        {children}
      </>
    </Col>
  )
}

export default PriceColumn

//=============================================================================
