/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import { BsStarFill, BsStarHalf } from "react-icons/bs"

//=============================================================================

// TODO: Add conditions to determine when to use filled and halved stars

const Ratings = ({ starStyle, color, ...rest }) => {
  const starProps = {
    className: "pr-1",
    style: { ...starStyle },
    color,
  }

  return (
    <span {...rest}>
      <BsStarFill {...starProps} />
      <BsStarFill {...starProps} />
      <BsStarFill {...starProps} />
      <BsStarFill {...starProps} />
      <BsStarHalf {...starProps} />
    </span>
  )
}

export default Ratings

//=============================================================================
