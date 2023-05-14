/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import Col from "react-bootstrap/Col"

//=============================================================================

const InfoColumn = ({ lg, md, sm, xs, item, children }) => {
  return (
    <Col
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <b style={{ display: "block", fontSize: "1.6rem" }}>
          {item.title}
          {`  `}
          {item.variant.title === !"Default Title" ? item.variant.title : ""}
        </b>
        {children}
      </div>
    </Col>
  )
}

export default InfoColumn

//=============================================================================
