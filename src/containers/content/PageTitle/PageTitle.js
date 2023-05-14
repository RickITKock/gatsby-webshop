/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { pageTitle, defaultMarginBottom } from "./page-title.module.css"
import Container from "react-bootstrap/Container"

//=============================================================================

const PageTitle = ({children, className, useDefaultMarginBottom = true, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${pageTitle} ${
        useDefaultMarginBottom && defaultMarginBottom
      } text-center px-2 ${className}`}
    >
      <Container>{children}</Container>
    </div>
  )
}

export default PageTitle

//=============================================================================
