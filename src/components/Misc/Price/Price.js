/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState, useEffect } from "react"
import Shrink from "../../Animations/Shrink/Shrink"

//=============================================================================

const Price = ({
  priceAmount,
  compareAtPriceAmount,
  htmlHeadingString = "h4",
  ...rest
}) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  })

  return React.createElement(
    htmlHeadingString,
    { className: "price-label", ...rest },
    <>
      {compareAtPriceAmount && (
        <>
          <Shrink
            animate={animate}
            timeout={500}
            className="d-inline"
            Wrapper={({ children, others }) => (
              <span {...others}>{children}</span>
            )}
          >
            <s>{compareAtPriceAmount}</s>
          </Shrink>{" "}
        </>
      )}
      <span
        style={{
          color: compareAtPriceAmount !== null ? "#8B0100" : "rgb(18, 34, 46)",
        }}
      >
        {priceAmount}
      </span>
    </>
  )
}

export default Price

//=============================================================================
