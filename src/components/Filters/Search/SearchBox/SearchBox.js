/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useRef } from "react"
import { connectSearchBox } from "react-instantsearch-dom"

//=============================================================================

const SearchBox = connectSearchBox(
  ({
    refine,
    currentRefinement,
    Symbol,
    formClassName,
    backgroundColor,
    inputRef,
    ...rest
  }) => {
    return (
      <form
        onSubmit={e => e.preventDefault()}
        className={`d-flex ${formClassName}`}
        style={{ borderRadius: 5, backgroundColor: backgroundColor }}
      >
        {Symbol && (
          <div className={`px-2 align-self-center`}>
            <Symbol />
          </div>
        )}
        <div className={`d-flex align-items-center flex-grow-1`}>
          <input
            {...rest}
            ref={inputRef}
            style={{ backgroundColor: "rgba(0, 0, 0, 0)", outline: "none" }}
            className={`w-100 h-100 px-2 border-0`}
            aria-label="Search"
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
          />
        </div>
      </form>
    )
  }
)

export default SearchBox

//=============================================================================
