/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import SearchBox from "../../../components/Filters/Search/SearchBox/SearchBox"
import { BsSearch } from "react-icons/bs"

//=============================================================================

const ProductSearchBox = ({ ...rest }) => {
  return (
    <SearchBox
      {...rest}
      formClassName={`p-3`}
      Symbol={BsSearch}
      placeholder={"Search for chairs or other products..."}
      autoComplete={false}
      backgroundColor={`white`}
    />
  )
}

export default ProductSearchBox

//=============================================================================
