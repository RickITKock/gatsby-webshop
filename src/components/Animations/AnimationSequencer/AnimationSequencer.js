/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useEffect } from "react"
import { useAnimationQueue } from "../../../hooks/useAnimationQueue"
import { resolveJsonPropertyByString } from "../../../utils/JsonHelper"
import PropTypes from "prop-types"

//=============================================================================

const AnimationSequencer = ({
  data,
  start,
  propertyPath,
  AnimationComponent,
  PresentationComponent,
  itemAnimationDuration,
  nextAnimationRelativeStartingPointInMillis,
  style,
  isLayoutPropertyObject = false,
  ...others
}) => {
  const isPropertyPathUndefined =
    propertyPath === undefined || propertyPath === null
  const [animationQueue, setAnimationQueue] = useAnimationQueue(
    nextAnimationRelativeStartingPointInMillis
  )

  useEffect(() => {
    if (start) {
      setAnimationQueue([false])
    }
  }, [start])

  const notLastAnimation = animationQueue.length < data.length
  let layoutProperties = isPropertyPathUndefined ? {} : { ...propertyPath }

  let i = -1
  const animationSequence = data.map(item => {
    i++

    Object.keys(propertyPath).forEach(key => {
      const resolvedData = resolveJsonPropertyByString(propertyPath[key], item)
      if (!isLayoutPropertyObject) {
        layoutProperties[key] = resolvedData == undefined ? null : resolvedData
      } else {
        layoutProperties[key] = resolvedData == undefined ? item : resolvedData
      }
    })

    return (
      <AnimationComponent
        key={i}
        style={{ position: "relative", zIndex: data.length - i }}
        animate={animationQueue[i]}
        timeout={itemAnimationDuration}
        onEntering={function () {
          if (notLastAnimation) {
            setAnimationQueue([...animationQueue, false])
          }
          i++
        }}
      >
        <PresentationComponent {...layoutProperties} />
      </AnimationComponent>
    )
  })

  return (
    <div
      {...others}
      style={{
        ...style,
        position: "relative",
        zIndex: 1,
        perspective: `100px`,
      }}
    >
      {animationSequence}
    </div>
  )
}

AnimationSequencer.propTypes = {
  data: PropTypes.array,
  start: PropTypes.bool,
  propertyPath: PropTypes.object,
  AnimationComponent: PropTypes.element.isRequired,
  PresentationComponent: PropTypes.element.isRequired,
  itemAnimationDuration: PropTypes.number,
  nextAnimationRelativeStartingPointInMillis: PropTypes.number,
  style: PropTypes.object,
  others: PropTypes.any,
}

AnimationSequencer.defaultProps = {
  data: [],
  start: true,
  propertyPath: {},
  AnimationComponent: null,
  PresentationComponent: null,
  itemAnimationDuration: 300,
  nextAnimationRelativeStartingPointInMillis: 75,
  style: null,
  others: null,
}

export default AnimationSequencer

//=============================================================================
