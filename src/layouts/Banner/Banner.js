/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { GiCheckMark } from "react-icons/gi"

import { banner } from "./banner.module.css"

//=============================================================================

const Banner = () => {
  return (
    <div className={banner}>
      <GiCheckMark /> Free Shipping&nbsp;&nbsp;
      <GiCheckMark /> 30 Day Return Policy&nbsp;&nbsp;
      <GiCheckMark /> 2 Year Guarantee&nbsp;&nbsp;
      <GiCheckMark /> Expert Advice
    </div>
  )
}

export default Banner

//=============================================================================
