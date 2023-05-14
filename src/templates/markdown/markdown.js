/*****************************************************************************
@author Rick Kock
******************************************************************************/

// TODO: Add a back button

//=============================================================================

import React, { useState, useEffect } from "react"
import {
  FacebookShareButton,
  PinterestShareButton,
  PinterestIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import PageTitle from "../../containers/content/PageTitle/PageTitle"
import FadeInFromTop from "../../components/Animations/FadeIn/FadeInFromTop"

import { socialMediaIcon, markdown } from "./markdown.module.css"

//=============================================================================

// TODO: Add featured images later

const shortcodes = { Link } // Provide common components here

const Markdown = ({ data: { mdx, site } }) => {
  const timeout = 500
  const [animate, setAnimation] = useState(false)
  const url = `${site.siteMetadata.siteUrl}/${mdx.slug}`
  const SocialMediaIconProps = {
    round: true,
    className: `${socialMediaIcon} mx-2`,
  }

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  return (
    <>
      <SEO
        slug={mdx.slug}
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
        meta={{
          property: `og:url`,
          content: url,
        }}
      />
      <Container className="p-0" fluid>
        <PageTitle>
          <h1>{mdx.frontmatter.title}</h1>
          {mdx.frontmatter.subtitle && (
            <h5 className="formal-text mx-5">{mdx.frontmatter.subtitle}</h5>
          )}
        </PageTitle>
        <Container className="my-5">
          <Card
            className={`border-0 card-shadow-only card-background-color`}
            style={{
              borderRadius: "0.5rem",
            }}
          >
            <Card.Body className={`px-5 py-4`}>
              <FadeInFromTop
                animate={animate}
                timeout={timeout}
                className={markdown}
              >
                {mdx.frontmatter.isBlogPost && (
                  <span className={`text-muted`}>
                    {mdx.frontmatter.date} | {mdx.timeToRead} min read{" "}
                    {mdx.frontmatter.author && `| By ${mdx.frontmatter.author}`}
                  </span>
                )}
                <div className="mt-3">
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                  </MDXProvider>
                </div>
              </FadeInFromTop>
              {mdx.frontmatter.isBlogPost && (
                <div
                  className={
                    "d-flex justify-content-sm-end justify-content-center"
                  }
                >
                  <FacebookShareButton url={url}>
                    <FacebookIcon {...SocialMediaIconProps} />
                  </FacebookShareButton>
                  {/* <PinterestShareButton url={url} media={featuredImgFluid?.src}>
                    <PinterestIcon {...SocialMediaIconProps} />
                  </PinterestShareButton> */}
                  <LinkedinShareButton url={url}>
                    <LinkedinIcon {...SocialMediaIconProps} />
                  </LinkedinShareButton>
                  <TwitterShareButton>
                    <TwitterIcon {...SocialMediaIconProps} />
                  </TwitterShareButton>

                  {/* We need a facebook app id for facebook messenger share button */}
                  <FacebookMessengerShareButton url={url}>
                    <FacebookMessengerIcon {...SocialMediaIconProps} />
                  </FacebookMessengerShareButton>
                  <WhatsappShareButton url={url}>
                    <WhatsappIcon {...SocialMediaIconProps} />
                  </WhatsappShareButton>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      slug
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        subtitle
        author
        isBlogPost
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Markdown

//=============================================================================
