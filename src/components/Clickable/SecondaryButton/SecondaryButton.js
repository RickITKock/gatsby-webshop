/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import Button from "react-bootstrap/Button"

import { secondaryButton } from "./secondary-button.module.css"

//=============================================================================

const SecondaryButton = ({ className, children, ...others }) => {
  return (
    <Button
      {...others}
      variant="light"
      className={`${secondaryButton} color-primary shadow-misc rounded-pill py-3 px-5 background-color-misc border-0 ${className}`}
    >
      <b>{children}</b>
    </Button>
  )
}

export default SecondaryButton

//=============================================================================
