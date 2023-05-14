/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

// TODO: Adjust the size of the fonts

import * as React from "react"
import {
  heroContainer,
  hero,
  heroClipped,
  heroTextBox,
  headline,
  subHeadline,
  firstLetter,
  seperator,
  line,
  seperatorBrand,
  lineLeft,
  lineRight,
  singleAnimation,
  subTitle,
} from "./hero.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Button from "react-bootstrap/Button"
import Logo from "../../../shared/Logo/Logo"

//=============================================================================

const Hero = () => {
  return (
    <div className={heroContainer}>
      <StaticImage
        quality={60}
        className={hero}
        layout="fullWidth"
        src="../../../images/hero-image.jpg"
        alt=""
        formats={["auto", "webp", "avif"]}
      />
      <div className={heroClipped}>
        <div className={heroTextBox}>
          <h5 className={`${headline}`}>Welcome to</h5>
          <h1 className={`${subHeadline} mb-2`}>
            <span className={`${firstLetter}`}>W</span>erk
            <br />
            Comfortabel
          </h1>

          <div className={seperator}>
            <div className={`${line} ${lineLeft}`}></div>
            <div
              className={`${seperatorBrand} p-2 d-flex justify-content-center align-items-center`}
            >
              <Logo height={100} width={100} />
            </div>
            <div className={`${line} ${lineRight}`}></div>
          </div>
          <div className={singleAnimation}>
            <h6 className={`formal-text mt-4 ${subTitle}`}>
              Work Comfortably <br />
              and productively
            </h6>
            <div className="mt-5">
              <Button
                className="rounded-pill py-4 background-color-misc border-0 shadow-lg"
                size="lg"
                variant="light"
                style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
                onClick={() => navigate("/chairs")}
              >
                <b style={{ fontSize: "1.6rem" }}>Explore</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

//=============================================================================
