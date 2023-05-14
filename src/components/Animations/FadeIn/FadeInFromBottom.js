/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { Transition } from "react-transition-group"

//=============================================================================

const FadeInFromBottom = ({
  animate,
  onEntered,
  onEntering,
  timeout,
  children,
  style,
  additionalTransitionStyle,
  ...others
}) => {
  const defaultStyle = {
    ...style,
    transition: `all ${timeout}ms`,
    transform: "translateY(15%)",
    opacity: 0,
  }

  const transitionStyles = {
    entering: {
      ...additionalTransitionStyle,
      opacity: 1,
      transform: "translateY(0)",
    },
    entered: {
      ...additionalTransitionStyle,
      opacity: 1,
      transform: "translateY(0)",
    },
  }

  return (
    <Transition
      in={animate}
      timeout={timeout}
      onEntering={onEntering}
      onEntered={onEntered}
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

export default FadeInFromBottom

//=============================================================================