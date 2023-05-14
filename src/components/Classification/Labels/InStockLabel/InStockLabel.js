/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import PropTypes from "prop-types"
import Badge from "react-bootstrap/Badge"

//=============================================================================

const InStockLabel = ({ className, ...others }) => {
  return (
    <Badge {...others} variant={"success"} className={`${className} px-3`} pill>
      In Stock
    </Badge>
  )
}

InStockLabel.propTypes = {
  others: PropTypes.any,
}

export default InStockLabel

//=============================================================================
