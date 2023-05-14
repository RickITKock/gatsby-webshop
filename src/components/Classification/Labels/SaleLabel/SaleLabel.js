/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
// import styles from "./sale-label.module.css"

//=============================================================================

// TODO: Change the units of the css file
const SaleLabel = ({ style, priceAmount, compareAtPriceAmount, ...others }) => {
  return (
    <div
      {...others}
      className={`rounded-circle text-center align-items-center shadow-sm`}
      style={{
        ...style,
        backgroundColor: "#cc3399",
        width: "6rem",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        className={`text-light`}
        style={{
          fontSize: "1.6rem",
          lineHeight: 1,
          textShadow:
            "1px 1px 3px #FFFFFF",
        }}
      >
        SALE
        <br />
        {Math.round(
          ((compareAtPriceAmount - priceAmount) / compareAtPriceAmount) * 100
        )}
        %
      </span>
    </div>
  )
}

export default SaleLabel

//=============================================================================
