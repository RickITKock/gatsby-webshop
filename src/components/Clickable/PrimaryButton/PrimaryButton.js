/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "react-bootstrap/Button"
import { primaryButton } from "./primary-button.module.css"

//=============================================================================

const PrimaryButton = ({ className, children, ...others }) => {
  return (
    <Button
      {...others}
      variant="dark"
      size={`sm`}
      className={`${primaryButton} ${className}`}
    >
      {children}
    </Button>
  )
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  others: PropTypes.any,
}

export default PrimaryButton

//=============================================================================
