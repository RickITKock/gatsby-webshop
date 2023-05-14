/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import {
  loadingSpinner,
  loadingSpinnerInner,
} from "./loading-spinner.module.css"

//=============================================================================

const LoadingSpinner = ({ ...others }) => {
  return (
    <div {...others} className={loadingSpinner}>
      <div className={loadingSpinnerInner}>
        <div className={loadingSpinnerInner}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner

//=============================================================================
