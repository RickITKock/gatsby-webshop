/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { Transition } from "react-transition-group"

//=============================================================================

const FlipListItem = ({
  animate,
  onEntered,
  onEntering,
  timeout,
  children,
  style,
  ...others
}) => {
  const defaultStyle = {
    transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
    transform: "rotateX(90deg)",
    opacity: 0,
  }

  const transitionStyles = {
    exiting: { opacity: 0, transform: "rotateX(-3deg)" },
    exited: { opacity: 0, transform: "rotateX(-3deg)" },
    entering: { opacity: 1, transform: "rotateX(0deg)" },
    entered: { opacity: 1, transform: "rotateX(0deg)" },
  }

  return (
    <Transition
      style={{ transformStyle: `preserve-3d` }}
      in={animate}
      timeout={timeout}
      onEntering={onEntering}
      onEntered={onEntered}
    >
      {state => (
        <div
          {...others}
          style={{
            ...style,
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

export default FlipListItem

//=============================================================================
