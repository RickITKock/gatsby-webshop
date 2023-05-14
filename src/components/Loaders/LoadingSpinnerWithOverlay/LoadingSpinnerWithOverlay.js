/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import LoadingSpinner from "../LoadingSpinnner/LoadingSpinner"
import { loadingSpinnerWithOverlay } from "./loading-spinner-with-overlay.module.css"
import { Transition } from "react-transition-group"

//=============================================================================

const LoadingSpinnerWithOverlay = ({ animate, ...others }) => {
  const timeout = 300
  const defaultExit = { exiting: {}, exited: {} }
  const enterFadeIn = { display: "block", opacity: 1, transform: "scale(1)" }
  const defaultStyle = {
    opacity: 0,
    display: "none",
    transform: "scale(0)",
    transition: `opacity ${timeout}ms ease, transform ${timeout} linear`,
  }

  const transitionStyle = {
    ...defaultExit,
    entering: { ...enterFadeIn },
    entered: { ...enterFadeIn },
  }

  return (
    <Transition in={animate} timeout={timeout}>
      {state => (
        <div
          {...others}
          className={loadingSpinnerWithOverlay}
          style={{
            ...defaultStyle,
            ...transitionStyle[state],
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </Transition>
  )
}

export default LoadingSpinnerWithOverlay

//=============================================================================
