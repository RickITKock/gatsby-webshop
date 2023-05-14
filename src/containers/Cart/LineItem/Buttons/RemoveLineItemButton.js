/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import styles from "./remove-line-item-button.module.css"

//=============================================================================

const RemoveLineItemButton = ({ className, onClick, ...others }) => {
  return (
    <p
      {...others}
      className={`${styles.RemoveLineItemButton} ${className} m-0`}
      onClick={onClick}
    >
      <MdRemoveShoppingCart /> Remove
    </p>
  )
}

export default RemoveLineItemButton

//=============================================================================
