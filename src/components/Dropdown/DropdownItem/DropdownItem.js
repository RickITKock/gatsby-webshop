/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { dropdownItem } from "./dropdown-item.module.css"

//=============================================================================

export default ({
  onClick,
  className,
  children,
  callBack,
  onBlur,
  style,
  ...others
}) => {
  return (
    <div
      {...others}
      className={`${dropdownItem} ${className}`}
      style={{ ...style, cursor: `${onClick && "pointer"}` }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

//=============================================================================
