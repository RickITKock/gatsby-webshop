/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import LineItem from "../LineItem/LineItem"
import Card from "react-bootstrap/Card"
import PropTypes from "prop-types"
import AnimationSequencer from "../../../components/Animations/AnimationSequencer/AnimationSequencer"
import FlipListItem from "../../../components/Animations/FlipListItem/FlipListItem"

//=============================================================================

const RenderLineItem = ({ ...item }) => {
  return (
    <Card className={`border-0 rounded-0 mb-0 card-shadow-only`} body>
      <LineItem {...item} />
    </Card>
  )
}

const LinteItemList = ({ lineItems, className, ...others }) => {
  const propertyPath = { item: "" }

  return (
    <div {...others} className={`${className}`}>
      <AnimationSequencer
        data={lineItems}
        propertyPath={propertyPath}
        PresentationComponent={RenderLineItem}
        AnimationComponent={FlipListItem}
        isLayoutPropertyObject={true}
        itemAnimationDuration={300}
        nextAnimationRelativeStartingPointInMillis={75}
      />
    </div>
  )
}

LinteItemList.propTypes = {
  lineItems: PropTypes.array,
  className: PropTypes.string,
  others: PropTypes.any,
}

export default LinteItemList

//=============================================================================
