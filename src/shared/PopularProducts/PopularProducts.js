/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  popularProductList,
  popularProductCard,
  cardContent,
  popularProductListItem,
} from "./popular-products.module.css"

//=============================================================================

const PopularProductCard = ({ title, handle, imageSrc, ...rest }) => {
  const productImageSource = getImage(imageSrc)

  return (
    <div className={`${popularProductCard}`} {...rest}>
      <div className="zoomin-image-container">
        <GatsbyImage
          alt={title}
          image={productImageSource}
          className="zoomin-image"
        />
      </div>
      <div className={`${cardContent} text-light text-center`}>
        <p className="label-font m-0" style={{ fontSize: "1.2rem" }}>
          {title}
        </p>
      </div>
    </div>
  )
}

const PopularProducts = () => {
  const { allShopifyCollection } = useStaticQuery(popularProductsQuery)

  return (
    <div className={popularProductList}>
      {allShopifyCollection.edges[0].node.products.map(product => {
        return (
          <div key={product.id} className={popularProductListItem}>
            <PopularProductCard
              title={product.title}
              handle={product.handle}
              imageSrc={product.variants[0].image.localFile}
            />
          </div>
        )
      })}
    </div>
  )
}

const popularProductsQuery = graphql`
  query {
    allShopifyCollection(filter: { title: { eq: "Most Populair" } }) {
      edges {
        node {
          products {
            availableForSale
            id
            variants {
              presentmentPrices {
                edges {
                  node {
                    compareAtPrice {
                      amount
                    }
                    price {
                      amount
                    }
                  }
                }
              }
              availableForSale
              shopifyId
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            title
            handle
            shopifyId
          }
          title
        }
      }
    }
  }
`

export default PopularProducts

//=============================================================================
