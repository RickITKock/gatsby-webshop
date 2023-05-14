/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { Transition } from "react-transition-group"
import { RiArrowDownSLine } from "react-icons/ri"

//=============================================================================

export default ({ animate, timeout }) => {
  const defaultStyles = {
    transform: "rotate(0)",
    transition: `transform ${200}ms ease-in-out`,
    display: "inline-block",
  }

  const transitionStyles = {
    entering: { transform: "rotate(-180deg)" },
    entered: { transform: "rotate(-180deg)" },
  }

  return (
    <Transition timeout={timeout} in={animate}>
      {state => (
        <div
          style={{
            ...defaultStyles,
            ...transitionStyles[state],
          }}
        >
          <RiArrowDownSLine />
        </div>
      )}
    </Transition>
  )
}

//=============================================================================
