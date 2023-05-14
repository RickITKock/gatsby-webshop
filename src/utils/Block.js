/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"

//=============================================================================

class Block extends React.Component {
  render() {
    return <div ref={this.props.innerRef}>{this.props.children}</div>
  }
}

const BlockWithRef = React.forwardRef((props, ref) => {
  return <Block innerRef={ref} {...props} />
})

export default BlockWithRef

//=============================================================================