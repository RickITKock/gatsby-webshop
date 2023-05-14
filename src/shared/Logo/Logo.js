/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"

//=============================================================================

const Logo = ({ ...rest }) => {
  return (
    <svg {...rest}>
      <circle cx="50%" cy="50%" r="49%" fill="white" stroke="grey" />
      <text
        x="50%"
        y="50%"
        fill="black"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="12px"
        font-size-adjust="0.50"
      >
        LOGO
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

export default Logo

//=============================================================================
