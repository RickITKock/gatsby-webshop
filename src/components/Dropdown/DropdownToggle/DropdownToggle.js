/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import DropdownArrow from "./DropdownArrow/DropdownArrow"

//=============================================================================

const DropdownToggle = ({ animate, onClick, children, useDropdownArrow = true, ...others }) => {
  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      {...others}
      onClick={() => {
        handleOnClick()
      }}
    >
      {children} {useDropdownArrow && <DropdownArrow animate={animate} />}
    </button>
  )
}

export default DropdownToggle

//=============================================================================
