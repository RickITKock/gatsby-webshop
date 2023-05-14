/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Badge from "react-bootstrap/Badge"
import { Transition } from "react-transition-group"
import { BsBag } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import StoreContext from "../../context/StoreContext"
import { getTotalNumberOfItemsInCart } from "../../utils/store-functions"
import Logo from "../../shared/Logo/Logo"
import SearchBox from "../../components/Filters/Search/SearchBox/SearchBox"

import {
  lightThemedLink,
  darkThemedLink,
  headerItem,
} from "./header.module.css"

//=============================================================================

const InteractiveHeader = ({ animate, timeout = 500, children }) => {
  const defaultStyle = {
    backgroundColor: "rgb(255, 255, 255, 0.8)",
    transition: `background-color ${timeout}ms`,
  }

  const transitionStyles = {
    entering: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    entered: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
  }

  return (
    <Transition in={animate} timeout={timeout}>
      {state => (
        <header
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="shadow-sm"
        >
          {children}
        </header>
      )}
    </Transition>
  )
}

const NavSearchBox = ({ ...rest }) => {
  return (
    <SearchBox
      {...rest}
      Symbol={BsSearch}
      placeholder="Search for chairs or other products..."
      autocomplete="false"
    />
  )
}

const InteractiveLink = ({ animate, timeout = 500, children, ...rest }) => {
  return (
    <Transition in={animate} timeout={timeout}>
      {state => (
        <Link
          {...rest}
          className={
            state === "entering" || state === "entered"
              ? darkThemedLink
              : lightThemedLink
          }
        >
          {children}
        </Link>
      )}
    </Transition>
  )
}

const InteractiveHeaderItem = ({
  animate,
  timeout = 500,
  children,
  ...rest
}) => {
  return (
    <Transition in={animate} timeout={timeout}>
      {state => (
        <span
          {...rest}
          className={
            state === "entering" || state === "entered"
              ? `${darkThemedLink} ${headerItem}`
              : `${lightThemedLink} ${headerItem}`
          }
        >
          {children}
        </span>
      )}
    </Transition>
  )
}

const Header = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const totalNumberOfItemsInCart = getTotalNumberOfItemsInCart(checkout)

  const [animateBackground, setAnimateBackground] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 34) {
      setAnimateBackground(true)
    } else {
      setAnimateBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <InteractiveHeader animate={animateBackground}>
      <Container>
        <nav className={"d-flex justify-content-between"}>
          <InteractiveLink animate={animateBackground} to="/">
            <Logo height="1em" width="1em" />
          </InteractiveLink>
          <InteractiveLink animate={animateBackground} to="/">
            Home
          </InteractiveLink>
          <InteractiveLink animate={animateBackground} to="/chairs">
            Chairs
          </InteractiveLink>
          <InteractiveLink animate={animateBackground} to="/blog">
            Blog
          </InteractiveLink>
          <InteractiveLink animate={animateBackground} to="/contact">
            Contact
          </InteractiveLink>
          <InteractiveLink animate={animateBackground} to="/about">
            About
          </InteractiveLink>
          <InteractiveHeaderItem animate={animateBackground}>
            <BsSearch />
          </InteractiveHeaderItem>
          <InteractiveLink animate={animateBackground} to="/cart">
            <div style={{ position: "relative" }}>
              <BsBag />
              <small
                style={{
                  position: "absolute",
                  bottom: "-0.5rem",
                  left: "0.7rem",
                }}
              >
                {totalNumberOfItemsInCart > 0 && (
                  <Badge
                    style={{ backgroundColor: "#CC3399" }}
                    variant={"dark"}
                    pill
                  >
                    {totalNumberOfItemsInCart}
                  </Badge>
                )}
              </small>
            </div>
          </InteractiveLink>
        </nav>
      </Container>
    </InteractiveHeader>
  )
}

export default Header

//=============================================================================
