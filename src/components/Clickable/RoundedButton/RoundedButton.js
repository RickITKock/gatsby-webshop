/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "react-bootstrap/Button"
import { roundedButton } from "./rounded-button.module.css"
import FadeInFromRight from "../../Animations/FadeIn/FadeInFromRight"
// import { ImArrowRight2 } from "react-icons/im"
import { IoIosArrowForward } from "react-icons/io"

//=============================================================================

const PrimaryButton = ({ className, children, ...others }) => {
  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Button
        {...others}
        onMouseOver={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
        className={`${roundedButton} ${className} border-0`}
      >
        {children}
        {/* <FadeInFromRight
          style={{ display: "inline-block", position: "absolute" }}
          animate={animate}
          timeout={300}
        >
          <>
            &nbsp;
            <IoIosArrowForward />
          </>
        </FadeInFromRight> */}
      </Button>
    </>
  )
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  others: PropTypes.any,
}

export default PrimaryButton

//=============================================================================
