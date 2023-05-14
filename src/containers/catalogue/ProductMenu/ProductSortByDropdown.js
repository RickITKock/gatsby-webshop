/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import DropdownWrapper from "../../../components/Dropdown/DropdownWrapper/DropdownWrapper"
import DropdownMenu from "../../../components/Dropdown/DropdownMenu/DropdownMenu"
import DropdownItem from "../../../components/Dropdown/DropdownItem/DropdownItem"
import DropdownToggle from "../../../components/Dropdown/DropdownToggle/DropdownToggle"
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick"
import { connectSortBy } from "react-instantsearch-dom"

import { dropdownToggle, dropdownToggleText } from "./product-menu.module.css"

//=============================================================================

const ProductSortByDropdown = ({
  items,
  currentRefinement,
  refine,
  className,
}) => {
  const dropdownRef = React.createRef()
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
          Sort by{" "}
          {
            items.find(item => {
              return item.value === currentRefinement
            }).label
          }
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
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  )
}

export default connectSortBy(ProductSortByDropdown)

//=============================================================================
