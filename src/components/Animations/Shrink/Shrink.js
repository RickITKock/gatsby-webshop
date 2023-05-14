/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import { Transition } from "react-transition-group"

//=============================================================================

const Shrink = ({
  animate,
  onEntered,
  onEntering,
  timeout,
  children,
  style,
  additionalTransitionStyle,
  Wrapper,
  ...others
}) => {
  const defaultStyle = {
    ...style,
    transition: `transform ${timeout}ms`,
    transform: "scale(1.5)",
  }

  const transitionStyles = {
    entering: { ...additionalTransitionStyle, transform: "scale(1)" },
    entered: { ...additionalTransitionStyle, transform: "scale(1)" },
  }

  return (
    <Transition
      in={animate}
      timeout={timeout}
      onEntering={onEntering}
      onEntered={onEntered}
    >
      {state => (
        <Wrapper
          {...others}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </Wrapper>
      )}
    </Transition>
  )
}

Shrink.defaultProps = {
  Wrapper: ({ children, ...others }) => <div {...others}>{children}</div>,
}

export default Shrink

//=============================================================================
