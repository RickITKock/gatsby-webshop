/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { Transition } from "react-transition-group"

//=============================================================================

const FadeInFromTop = ({
  animate,
  onEntered,
  onEntering,
  timeout,
  children,
  style,
  mountOnEnter = false,
  unmountOnExit = false,
  ...others
}) => {
  const defaultStyle = {
    ...style,
    opacity: 0,
    transition: `all ${timeout}ms ease`,
    transform: "translateY(-20px)",
  }

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    entered: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exiting: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    exited: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
  }

  return (
    <Transition
      in={animate}
      timeout={timeout}
      onEntering={onEntering}
      onEntered={onEntered}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
    >
      {state => (
        <div
          {...others}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default FadeInFromTop

//=============================================================================