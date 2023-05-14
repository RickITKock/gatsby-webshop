/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import {
  footerList,
  stayConnectedRow,
  companyFooterContent,
  footerColumnLabel,
  footerLink,
  divider,
  backToTopButton,
} from "./footer.module.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { SocialIcon } from "react-social-icons"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AiOutlineMail } from "react-icons/ai"
import { ImPhone } from "react-icons/im"
import { FaIdeal, FaCcVisa, FaPaypal, FaCcMastercard } from "react-icons/fa"
import { SiBancontact } from "react-icons/si"
import { BsChevronUp } from "react-icons/bs"

// TODO: Add the button to scroll up

//=============================================================================

const StayConnectedRow = ({ children }) => {
  return (
    <div className={`${stayConnectedRow} text-center stacked-gradient-background`}>{children}</div>
  )
}

const BackToTopButton = () => {
  return (
    <a
      href="#top"
      className={`${backToTopButton} d-flex justify-content-center`}
    >
      <BsChevronUp className="mt-3" />
    </a>
  )
}

const Footer = () => {
  const socialMediaButtonAttributes = {
    style: { height: 38, width: 38 },
    bgColor: "white",
    fgColor: "#332e54",
    target: "_blank",
    className: "mx-2 mb-3 mx-sm-3",
  }
  const socialLinks = [
    "http://facebook.com/",
    "http://instagram.com/",
    "http://pinterest.com/",
    "http://www.linkedin.com/",
    "http://twitter.com/",
  ]
  const paymentMethodIconProps = { className: "mx-2" }

  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/(legal)/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const linksToLegalPages = data.allMdx.edges.map(legalDocument => {
    return (
      <li key={legalDocument.id}>
        <Link to={legalDocument.node.fields.slug} className={footerLink}>
          {legalDocument.node.frontmatter.title}
        </Link>
      </li>
    )
  })

  return (
    <footer>
      <StayConnectedRow>
        <h3 className="formal-text mb-4 mt-3 color-seal-brown">Stay Connected</h3>
        {socialLinks.map(link => {
          return <SocialIcon {...socialMediaButtonAttributes} url={link} />
        })}
      </StayConnectedRow>
      <div className={companyFooterContent}>
        <Container className="py-5" style={{ position: "relative" }}>
          <div className="d-flex justify-content-center">
            <BackToTopButton />
          </div>
          <Row className="py-5">
            <Col xs={12} md={6} lg={3} className="pb-5 pb-md-5 pb-lg-0">
              <h3 className={`formal-text ${footerColumnLabel}`}>Legal</h3>
              <div className="border-1"></div>
              <ul className={footerList}>{linksToLegalPages}</ul>
            </Col>
            <Col xs={12} md={6} lg={3} className="pb-5 pb-md-5 pb-lg-0">
              <h3 className={`formal-text ${footerColumnLabel}`}>Menu</h3>
              <ul className={footerList}>
                <li>
                  <Link className={footerLink} to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className={footerLink} to="/shipping">
                    Shipping &amp; Delivery
                  </Link>
                </li>
                <li>
                  <Link className={footerLink} to="/contact">
                    Support
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3} className="pb-5 pb-md-0 pb-lg-0">
              <h3 className={`formal-text ${footerColumnLabel}`}>Company</h3>
              <ul className={footerList}>
                <li>Javorzo</li>
                <li>Chamber of Commerce: 80035264</li>
                <li>VAT Number: NL003383944B55</li>
                <li>Laakweg 24N, 2521 SC, the Hague (no return or visiting address)</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3} className="pb-0 pb-md-0 pb-lg-0">
              <h3 className={`formal-text ${footerColumnLabel}`}>Contact</h3>
              <ul className={footerList}>
                <li>Got a question? Call us:</li>
                <li>
                  <ImPhone /> +31(0) 687 178 200
                </li>
                <li>Or email us:</li>
                <li>
                  <AiOutlineMail /> info@werkcomfortabel.eu
                </li>
                <li>Available: Mo-Sat 9:00 - 18:00</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={divider}>
          <Container>
            <Row className="py-3 text-light" style={{ fontSize: "1.6rem" }}>
              <Col
                md={8}
                sm={12}
                className="d-flex justify-content-center justify-content-md-start"
              >
                Copyright &copy; {new Date().getFullYear()} Javorzo. All rights
                reserved.
              </Col>
              <Col
                md={4}
                sm={12}
                className="d-flex justify-content-center justify-content-md-end"
              >
                <span {...paymentMethodIconProps}>
                  <FaIdeal />
                </span>
                <span {...paymentMethodIconProps}>
                  <FaCcVisa />
                </span>
                <span {...paymentMethodIconProps}>
                  <FaPaypal />
                </span>
                <span {...paymentMethodIconProps}>
                  <FaCcMastercard />
                </span>
                <span {...paymentMethodIconProps}>
                  <SiBancontact />
                </span>
                <span className={`ml-5`}>Netherlands</span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer

//=============================================================================
