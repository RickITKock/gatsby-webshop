/*****************************************************************************
@author Rick Kock
******************************************************************************/

// TODO: Add notifications
// NOTE: TracedSvg does not work!

//=============================================================================

import React, { useState } from "react"

import { roundSlideButton } from "./round-slide-button.module.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

//=============================================================================

const RoundSlideButton = ({ isNextSlide, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${roundSlideButton} d-flex justify-content-center align-items-center card-shadow`}
      aria-label={`${isNextSlide ? "Next Slide" : "Previous Slide"}`}
    >
      {isNextSlide ? <FiChevronRight /> : <FiChevronLeft />}
    </button>
  )
}

export default RoundSlideButton

//=============================================================================
