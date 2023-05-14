/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import { useState, useEffect } from "react"

//=============================================================================

export const useAnimationQueue = queueingDelayInMillis => {
  const [animationQueue, setAnimationQueue] = useState([])
  useEffect(() => {
    const lastAnimationIndex = animationQueue.length - 1
    // const postsAreNotAnimatedYet =
    //   animationQueue.length === 1 && animationQueue[0] === false
    // if (postsAreNotAnimatedYet) {
    //   setAnimationQueue([true])
    // }

    if (animationQueue.length > 0) {
      if (animationQueue[lastAnimationIndex] === false) {
        const updatedAnimations = [...animationQueue]
        updatedAnimations.splice(lastAnimationIndex, 1)
        updatedAnimations.push(true)
        setTimeout(
          () => {
            setAnimationQueue(updatedAnimations)
          },
          animationQueue.length === 1 ? 0 : queueingDelayInMillis
        )
      }
    }
  }, [animationQueue])

  return [animationQueue, setAnimationQueue]
}

//=============================================================================