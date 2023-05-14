/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { Component } from "react"
import { dropdownWrapper } from "./dropdown-wrapper.module.css"

//=============================================================================

class DropdownWrapper extends Component {
  render() {
    return (
      <div
        {...this.props.rest}
        ref={this.props.diffRef}
        className={`${this.props.className} ${dropdownWrapper}`}
      >
        {this.props.children}
      </div>
    )
  }
}

export default DropdownWrapper

//=============================================================================
