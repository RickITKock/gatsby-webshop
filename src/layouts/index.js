/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer/Footer"
import ContextProvider from "../provider/ContextProvider"
import Banner from "./Banner/Banner"
import Header from "./Header/Header"

//=============================================================================

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <ContextProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

//=============================================================================
