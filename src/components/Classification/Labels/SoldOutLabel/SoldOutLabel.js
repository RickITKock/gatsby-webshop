/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import PropTypes from "prop-types"
import Badge from "react-bootstrap/Badge"

//=============================================================================

const OutOfStockBadge = ({ className, ...others }) => {
  return (
    <Badge {...others} variant={"danger"} className={`${className} px-3`} pill>
      Sold out
    </Badge>
  )
}

OutOfStockBadge.propTypes = {
  others: PropTypes.any,
}

export default OutOfStockBadge

//=============================================================================
