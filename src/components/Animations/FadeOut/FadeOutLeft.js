/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import { Transition } from "react-transition-group"

//=============================================================================

const FadeInFromRight = ({
  animate,
  onEntered,
  onEntering,
  onExited,
  onExiting,
  entering,
  entered,
  timeout,
  children,
  style,
  additionalTransitionStyle,
  ...others
}) => {
  const defaultStyle = {
    ...style,
    opacity: 1,
    transform: "translateX(0)",
    transition: `transform ${timeout}ms ease, opacity ${timeout}ms ease`,
  }

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateX(-15%)",
    },
    entered: {
      opacity: 0,
      transform: "translateX(-15%)",
    },
  }

  return (
    <Transition
      in={animate}
      timeout={timeout}
      onEntering={onEntering}
      onEntered={onEntered}
      onExiting={onExiting}
      onExited={onExited}
    >
      {state => {
        return (
          <div
            {...others}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

export default FadeInFromRight

//=============================================================================
