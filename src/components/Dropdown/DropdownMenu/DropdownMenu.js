/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import { dropdownContent } from "./dropdown-menu.module.css"
import { Transition } from "react-transition-group"

// TODO: Consider using the fade in from top animation component

//=============================================================================

const DropdownMenu = ({
  animate,
  children,
  className,
  style,
  useCustomDropdownMenu = false,
  ...others
}) => {
  const timeout = 400

  const defaultStyles = {
    ...style,
    visibility: "hidden",
    opacity: 0,
    transform: "translateY(-20px)",
    transition: `opacity ${timeout}ms ease, visibility ${timeout}ms, transform ${timeout}ms ease`,
  }

  const transitionStyles = {
    exited: {
      visibility: "hidden",
      opacity: 0,
      transform: "translateY(-20px)",
    },
    exiting: {
      visibility: "hidden",
      opacity: 0,
      transform: "translateY(-20px)",
    },
    entering: {
      visibility: "visible",
      opacity: 1,
      transform: "translateY(0)",
    },
    entered: {
      visibility: "visible",
      opacity: 1,
      transform: "none",
    },
  }

  return (
    <Transition timeout={timeout} in={animate}>
      {state => (
        <div
          {...others}
          className={!useCustomDropdownMenu ? dropdownContent : null}
          style={{
            ...defaultStyles,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default DropdownMenu

//=============================================================================
