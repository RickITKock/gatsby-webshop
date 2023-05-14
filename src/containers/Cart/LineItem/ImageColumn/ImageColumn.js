/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"

//=============================================================================

const PriceColumn = ({ lg, md, sm, xs, item }) => {
  const variantImage = item.variant.image && (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      width="100%"
    />
  )
  return (
    <Col lg={lg} md={md} sm={sm} xs={xs}>
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
    </Col>
  )
}

export default PriceColumn

//=============================================================================
