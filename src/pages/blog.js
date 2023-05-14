/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import PageTitle from "../containers/content/PageTitle/PageTitle"
import Card from "react-bootstrap/Card"
import { Link, graphql } from "gatsby"
import FlipListItem from "../components/Animations/FlipListItem/FlipListItem"
import AnimationSequencer from "../components/Animations/AnimationSequencer/AnimationSequencer"

//=============================================================================

const CardItem = ({ author, slug, title, date, timeToRead, excerpt }) => {
  // console.log(author)
  return (
    <Link to={slug} style={{ textDecoration: "none", color: "inherit" }}>
      <Card
        className={`border-0 card-shadow card-background-color mb-3`}
        style={{
          borderRadius: "0.5rem",
        }}
      >
        <Card.Body className={`px-5 py-4`}>
          <h5
            style={{ textTransform: "Capitalize", fontFamily: "Josefin Sans" }}
          >
            {title}
          </h5>
          <Card.Text>
            <small className={`text-muted`}>
              {date} | {timeToRead} min read {author && `| By ${author}`}
            </small>
          </Card.Text>
          <Card.Text>{excerpt}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

const BlogPage = ({ data }) => {
  const { edges, totalCount } = data.allMdx

  const propertyPath = {
    title: "node.frontmatter.title",
    author: "node.frontmatter.author",
    timeToRead: "node.timeToRead",
    date: "node.frontmatter.date",
    excerpt: "node.excerpt",
    slug: "node.fields.slug",
  }

  return (
    <>
      <SEO title="Blog" />
      <Container className="p-0" fluid>
        <PageTitle>
          <h1>Welcome to the Productivity Blog</h1>
          <h5 className="formal-text mx-5">
            We've Written {totalCount} Blog Posts
          </h5>
          <p className="m-0">
            Stay up to date with all the latest blog-posts to help you work more
            productively and comfortably.
          </p>
        </PageTitle>
        <Container className="my-5">
          <AnimationSequencer
            data={edges}
            propertyPath={propertyPath}
            PresentationComponent={CardItem}
            AnimationComponent={FlipListItem}
            itemAnimationDuration={500}
            nextAnimationRelativeStartingPointInMillis={100}
          />
        </Container>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            author
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default BlogPage

//=============================================================================
