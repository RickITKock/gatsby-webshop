/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useContext } from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import PageTitle from "../containers/content/PageTitle/PageTitle"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "../containers/catalogue/ProductCard/ProductCard"
import ProductRefinementList from "../containers/catalogue/ProductMenu/ProductRefinementList"
import ProductSortByDropdown from "../containers/catalogue/ProductMenu/ProductSortByDropdown"
import ProductSearchBox from "../containers/catalogue/ProductSearchBox/ProductSearchBox"
import { StaticImage } from "gatsby-plugin-image"
import womanConsidering from "../images/womanConsidering.png"
import folder from "../images/folder.png"

import StoreContext from "../context/StoreContext"

// TODO: Update algolia with the image data
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Algolia
import { InstantSearch, connectHits } from "react-instantsearch-dom"
import client from "../shared/algolia-client"

//=============================================================================

const Chairs = () => {
  const searchIndices = [{ name: `Catalogue`, title: `Catalogue` }]
  const productColumnWidths = { xs: 12, sm: 6, lg: 4 }
  const { addVariantToCart } = useContext(StoreContext)
  const productSortByDropdownProps = {
    defaultRefinement: "Catalogue",
    items: [
      { value: "Catalogue", label: "Featured" },
      { value: "catalogue_price_asc", label: "Price: low - high" },
      { value: "catalogue_price_desc", label: "Price: high - low" },
    ],
    transformItems: items => {
      return items.map(item => ({
        ...item,
        label: item.label.toUpperCase(),
      }))
    },
  }

  const ProductHits = connectHits(hitObject => {
    return hitObject.hits.map(hit => {
      const imgSrc = hit.image.originalSrc

      return (
        <Col {...productColumnWidths} className={`mb-5`}>
          <ProductCard
            title={hit.title}
            handle={hit.handle}
            imageSource={imgSrc}
            price={hit.price}
            onClickAddToCart={() => addVariantToCart(hit.objectID, 1)}
            compareAtPrice={hit.compareAtPrice}
            availableForSale={hit.availableForSale}
          />
        </Col>
      )
    })
  })

  return (
    <>
      <SEO title="Chairs" />
      <Container className="p-0" fluid>
        <InstantSearch searchClient={client} indexName={searchIndices[0].name}>
          <PageTitle
            useDefaultMarginBottom={false}
            style={{
              paddingTop: "10rem",
              position: "relative",
              backgroundImage: "linear-gradient(180deg, #9BDDD8, #8CC8CB)",
            }}
          >
            <img
              src={folder}
              alt=""
              className={`d-none d-sm-inline`}
              style={{ position: "absolute", height: "100%", left: 0, bottom: 0 }}
            />
            <img
              src={womanConsidering}
              alt=""
              style={{
                position: "absolute",
                height: "90%",
                right: 0,
                top: "10%",
              }}
            />
            <h1 className="mb-3">Chairs</h1>
            <h5 className="formal-text mb-5">
              Chairs that help you concentrate and focus better!
            </h5>
            <Container className={`px-0 pb-2`}>
              <Row
                className={`justify-content-center mb-4 p-2`}
                style={{
                  position: "relative",
                  borderRadius: 5,
                  backgroundColor: "hsla(0, 0%, 100%,.8)",
                  zIndex: 2,
                }}
              >
                <Col
                  xs={{ span: 12, order: 2 }}
                  sm={{ span: 6, order: 2 }}
                  md={6}
                  lg={3}
                  className={"px-0 pb-2 pb-sm-0 pr-sm-1 pr-lg-2"}
                >
                  <ProductRefinementList
                    attribute="tags"
                    className={`d-inline`}
                  />
                </Col>
                <Col
                  xs={{ span: 12, order: 1 }}
                  sm={{ span: 12, order: 1 }}
                  md={12}
                  lg={{ span: 6, order: 2 }}
                  className={"px-0 pb-2 pb-lg-0"}
                >
                  <ProductSearchBox />
                </Col>
                <Col
                  xs={{ span: 12, order: 3 }}
                  sm={{ span: 6, order: 3 }}
                  md={6}
                  lg={{ span: 3, order: 3 }}
                  className={"px-0 pl-sm-1 pl-lg-2"}
                >
                  <ProductSortByDropdown
                    {...productSortByDropdownProps}
                    className={`d-inline`}
                  />
                </Col>
              </Row>
            </Container>
          </PageTitle>
          <Container className="my-5">
            <Row>
              <ProductHits />
            </Row>
          </Container>
        </InstantSearch>
      </Container>
    </>
  )
}

export default Chairs

//=============================================================================
