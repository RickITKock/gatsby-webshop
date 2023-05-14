/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import PropTypes from "prop-types"

//=============================================================================

const ShopBadge = ({ style, className, ...others }) => {
  return (
    <div
      {...others}
      style={{
        ...style,
        background: "#bbe5b3",
        color: " #414f3e",
        display: "inline-flex",
        fontSize: "1.6rem"
      }}
      className={`rounded-pill px-4 ${className}`}
    >
      Free
    </div>
  )
}

ShopBadge.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default ShopBadge

//=============================================================================
