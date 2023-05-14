/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import Col from "react-bootstrap/Col"
import DropdownWrapper from "../../../../components/Dropdown/DropdownWrapper/DropdownWrapper"
import DropdownMenu from "../../../../components/Dropdown/DropdownMenu/DropdownMenu"
import DropdownItem from "../../../../components/Dropdown/DropdownItem/DropdownItem"
import DropdownToggle from "../../../../components/Dropdown/DropdownToggle/DropdownToggle"
import { useDetectOutsideClick } from "../../../../hooks/useDetectOutsideClick"
import { dropdownToggle } from "./quantity-column.module.css"
import { MdRemoveShoppingCart } from "react-icons/md"

//=============================================================================

const QuantityColumn = ({ lg, md, sm, xs, item, children, onUpdate }) => {
  const dropdownRef = React.createRef()
  const [showDropdownMenu, setShowDropdownMenu] = useDetectOutsideClick(
    dropdownRef,
    false
  )

  const dropdownMenu = []
  dropdownMenu.push(
    <DropdownItem
      className="py-2 py-md-1"
      key={0}
      onClick={() => {
        setShowDropdownMenu(!showDropdownMenu)
        onUpdate(-1)
      }}
      style={{ fontSize: "1.4rem" }}
    >
      <span className="text-secondary">
        <MdRemoveShoppingCart /> Remove
      </span>
    </DropdownItem>
  )
  for (let i = 1; i < 6; i++) {
    dropdownMenu.push(
      <DropdownItem
        className="py-2 py-md-1"
        style={{ fontSize: "1.4rem" }}
        key={i}
        onClick={() => {
          setShowDropdownMenu(!showDropdownMenu)
          onUpdate(i)
        }}
      >
        {i}
      </DropdownItem>
    )
  }

  return (
    <Col
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DropdownWrapper className={`my-2`} diffRef={dropdownRef}>
        <DropdownToggle
          style={{ fontSize: "1.4rem", backgroundColor: "white" }}
          className={dropdownToggle}
          animate={showDropdownMenu}
          onClick={() => {
            setShowDropdownMenu(!showDropdownMenu)
          }}
        >
          {item.quantity}
        </DropdownToggle>
        <DropdownMenu
          style={{ backgroundColor: "white" }}
          animate={showDropdownMenu}
        >
          {dropdownMenu}
        </DropdownMenu>
        {children}
      </DropdownWrapper>
    </Col>
  )
}

export default QuantityColumn

//=============================================================================
