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
    opacity: 0,
    transform: "translateX(15%)",
    transition: `transform ${timeout}ms ease, opacity ${timeout}ms ease`,
  }

  const transitionStyles = {
    entered: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    exiting: {
      opacity: 0,
      transform: "translateX(15%)",
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
      mountOnEnter={true}
      unmountOnExit={true}
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
