/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import DropdownWrapper from "../../../components/Dropdown/DropdownWrapper/DropdownWrapper"
import DropdownMenu from "../../../components/Dropdown/DropdownMenu/DropdownMenu"
import DropdownItem from "../../../components/Dropdown/DropdownItem/DropdownItem"
import DropdownToggle from "../../../components/Dropdown/DropdownToggle/DropdownToggle"
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick"
import { connectRefinementList } from "react-instantsearch-dom"
import Formcheck from "react-bootstrap/FormCheck"

import { dropdownToggle, dropdownToggleText } from "./product-menu.module.css"

//=============================================================================

const ProductRefinementList = ({
  items,
  currentRefinement,
  refine,
  className,
}) => {
  const dropdownRef = React.createRef()
  const categoriesCount = currentRefinement.length
  const [showDropdownMenu, setShowDropdownMenu] = useDetectOutsideClick(
    dropdownRef,
    false
  )

  return (
    <DropdownWrapper className={`${className} my-2`} diffRef={dropdownRef}>
      <DropdownToggle
        className={dropdownToggle}
        animate={showDropdownMenu}
        onClick={() => {
          setShowDropdownMenu(!showDropdownMenu)
        }}
      >
        <span className={dropdownToggleText}>
          {categoriesCount > 0
            ? `Filter by ${categoriesCount} categor${
                categoriesCount !== 1 ? "ies" : "y"
              }`
            : "Categories"}
        </span>
      </DropdownToggle>
      <DropdownMenu
        style={{ backgroundColor: "white" }}
        animate={showDropdownMenu}
      >
        {items.map(item => (
          <DropdownItem
            key={item.value}
            onClick={() => {
              setShowDropdownMenu(!showDropdownMenu)
              refine(item.value)
            }}
          >
            <Formcheck
              type="checkbox"
              className={`d-inline`}
              checked={item.isRefined}
            />{" "}
            {item.label} ({item.count})
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  )
}

export default connectRefinementList(ProductRefinementList)

//=============================================================================
