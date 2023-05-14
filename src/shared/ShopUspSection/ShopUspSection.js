/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {
  uspHeadingText,
  path,
  mainStop,
  altStop,
  uspIconBackground,
} from "./shop-usp-section.module.css"
import Container from "react-bootstrap/Container"

//=============================================================================

const SvgPathsContainer = ({ iconWidth, iconHeight, children, ...others }) => {
  return (
    <div
      {...others}
      className={`${uspIconBackground} rounded-circle shadow-sm`}
    >
      <svg
        viewBox="0 0 96 96"
        xmlns="http://www.w3.org/2000/svg"
        id="Icons_Box"
        overflow="hidden"
        width={iconWidth}
        height={iconHeight}
      >
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop className={mainStop} offset="0%" />
          <stop className={altStop} offset="100%" />
        </linearGradient>
        <g>{children}</g>
      </svg>
    </div>
  )
}

const PackageFilledPaths = () => {
  return (
    <>
      <path
        fill="url(#gradient)"
        d="M30 19.5 15 28.6 48 48.6 63 39.5Z"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
      />
      <path
        fill="url(#gradient)"
        d="M81 28.6 48 8.6 33.8 17.2 66.8 37.2Z"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
      />
      <path
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
        d="M15 36.6 15 68.6 46 87.4 46 52.1 15 33.3Z"
      />
      <path
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
        d="M61 57.6 54 61.6 54 54.6 61 50.6 61 57.6ZM50 52.1 50 87.4 81 68.6 81 33.3 50 52.1Z"
      />
    </>
  )
}

const ShieldFilledPaths = () => {
  return (
    <>
      <path
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
        d="M78.547 22.841C67.9406 21.9961 58.0504 17.1565 50.875 9.3 49.5224 7.73234 47.1551 7.55798 45.5874 8.91056 45.4482 9.03065 45.3181 9.16082 45.198 9.3 38.0226 17.1565 28.1324 21.9961 17.526 22.841 15.5551 23.0257 14.0531 24.6875 14.068 26.667L14.068 36.32C14.068 57.306 27.415 76.503 45.947 88.382 47.2199 89.2 48.8531 89.2 50.126 88.382 68.658 76.5 82.005 57.306 82.005 36.32L82.005 26.667C82.0199 24.6875 80.5179 23.0257 78.547 22.841ZM75.505 36.32C75.505 53.02 65.556 69.867 48.891 81.396L48.037 81.987 47.184 81.396C30.518 69.866 20.567 53.015 20.567 36.32L20.567 29.069 21.831 28.869C31.2481 27.3799 40.0132 23.1346 47.02 16.669L48.036 15.733 49.053 16.669C56.0595 23.1346 64.8242 27.3799 74.241 28.869L75.505 29.069Z"
      />
      <path
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
        d="M48.036 19.788C41.0929 25.8603 32.6391 29.9454 23.567 31.612L23.567 36.32C23.567 51.747 32.694 67.383 48.037 78.33 63.378 67.385 72.505 51.748 72.505 36.32L72.505 31.612C63.4329 29.9454 54.9791 25.8603 48.036 19.788ZM45.468 58.833 35.356 48.72 38.792 45.284 45.468 51.96 59.14 38.288 62.576 41.725Z"
      />
    </>
  )
}

const PriceTagFilledPaths = () => {
  return (
    <>
      <path
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="0"
        stroke-linecap="round"
        d="M33 39C30.8 39 29 37.2 29 35 29 33.6 29.8 32.3 30.9 31.6 30.9 32.3 31 33.1 31 34 31 35.1 31.9 36 33 36 34.1 36 35 35.1 35 34 35 33.1 35 32.3 34.9 31.5 36.1 32.2 37 33.5 37 35 37 37.2 35.2 39 33 39ZM82.2 56.2 54.2 28.2C53.4 27.4 52.4 27 51.4 27L34.2 27C33.1 23.5 31 21.7 27.4 21 26.1 20.8 25 20.6 23.9 20.4 18.2 19.6 17 19.4 17 13 17 11.9 16.1 11 15 11 13.9 11 13 11.9 13 13 13 22.4 16.7 23.4 23.3 24.4 24.3 24.6 25.4 24.7 26.7 25 28 25.3 29.4 25.5 30.2 27.6 27.2 28.8 25.1 31.7 25.1 35.1L25.1 53.4C25.1 54.5 25.5 55.5 26.3 56.2L54.3 84.2C55 85 56 85.3 57 85.3 58 85.3 59 84.9 59.8 84.1L82.1 61.8C83.7 60.3 83.7 57.7 82.2 56.2Z"
      />
    </>
  )
}

function ShopUspSection({ ...rest }) {
  const iconHeight = "80%"
  const columnProperties = {
    sm: 12,
    md: 4,
    lg: 4,
    className: "py-5",
  }

  return (
    <Container {...rest} fluid>
      <Row className={`text-center`}>
        <Col {...columnProperties}>
          <div className="d-flex justify-content-center">
            <SvgPathsContainer iconWidth={iconHeight}>
              <ShieldFilledPaths />
            </SvgPathsContainer>
          </div>
          <h2 className={`mt-3 ${uspHeadingText}`}>Safe</h2>
          <p className="px-5 mx-2">
            All orders are insured and provided with track and trace, so that we
            can be sure that you receive your chair safely and quickly.
          </p>
        </Col>
        <Col {...columnProperties}>
          <div className="d-flex justify-content-center">
            <SvgPathsContainer iconWidth={iconHeight}>
              <PackageFilledPaths />
            </SvgPathsContainer>
          </div>
          <h2 className={`mt-3 ${uspHeadingText}`}>Reliable</h2>
          <p className="px-5 mx-2">
            You can register your return within 30 days of receiving the
            product. So you can return your purchases without any problem.
          </p>
        </Col>
        <Col {...columnProperties}>
          <div className="d-flex justify-content-center">
            <SvgPathsContainer iconWidth={iconHeight}>
              <PriceTagFilledPaths />
            </SvgPathsContainer>
          </div>
          <h2 className={`mt-3 ${uspHeadingText}`}>Best priced</h2>
          <p className="px-5 mx-2">
            In our offer you will find various models for decent prices.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ShopUspSection

//=============================================================================
