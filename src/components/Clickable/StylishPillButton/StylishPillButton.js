/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "react-bootstrap/Button"
import { stlylishPillButton } from "./stylish-pill-button.module.css"
import FadeInFromRight from "../../Animations/FadeIn/FadeInFromRight"
import FadeOutLeft from "../../Animations/FadeOut/FadeOutLeft"

//=============================================================================

const ButtonArrow = ({color = "#232323"}) => {
  return (
    <svg
      class="icon"
      width="35"
      height="11"
      viewBox="0 0 35 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="5.5" x2="34" y2="5.5" stroke={color}></line>
      <path
        d="M30 1L34.5 5.5L30 10"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  )
}

const PrimaryButton = ({ className, children, ...others }) => {
  const [fadeOut, setfadeOut] = useState(false)

  return (
    <button
      className={`${stlylishPillButton} ${className}`}
      {...others}
      onMouseOver={() => setfadeOut(true)}
      onMouseLeave={() => setfadeOut(false)}
    >
      {children}{" "}
      <FadeOutLeft
        animate={fadeOut}
        timeout={500}
        className="d-inline"
        style={{ position: "absolute" }}
      >
        <>
          &nbsp;
          <ButtonArrow />
        </>
      </FadeOutLeft>
      <FadeInFromRight
        animate={fadeOut}
        timeout={300}
        className="d-inline"
        style={{ position: "absolute" }}
      >
        <>
          &nbsp;
          <ButtonArrow color="#FFFFFF" />
        </>
      </FadeInFromRight>
    </button>
  )
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  others: PropTypes.any,
}

export default PrimaryButton

//=============================================================================
