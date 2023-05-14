/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import * as React from "react"
import Card from "react-bootstrap/Card"
import {
  productCardTitle,
  productImageContainer,
  productImage,
  cardImageZoomIn,
} from "./product-card.module.css"
import Price from "../../../components/Misc/Price/Price"
import Ratings from "../../../components/Classification/Rating/Ratings/Ratings"
import PrimaryButton from "../../../components/Clickable/PrimaryButton/PrimaryButton"
import SaleLabel from "../../../components/Classification/Labels/SaleLabel/SaleLabel"
import { getFormattedPrice } from "../../../utils/PriceFormatter"
import SoldOutLabel from "../../../components/Classification/Labels/SoldOutLabel/SoldOutLabel"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// TODO: Use the priceformatter to format the prices before rendering them
// TODO: Align the ratings and prices using baseline
// TODO: Distinguish between two onclick listeners: card and add to cart

//=============================================================================

const ProductCard = ({
  title,
  imageSource,
  price,
  compareAtPrice,
  availableForSale,
  onClickAddToCart,
  handle,
  useGatsbyImageData = false,
}) => {
  const image = useGatsbyImageData ? getImage(imageSource) : imageSource
  return (
    <Card
      style={{ cursor: "pointer" }}
      className={
        "rounded-0 border-0 card-shadow-on-hover-only card-background-color"
      }
    >
      <div className={productImageContainer} style={{ position: "relative" }}>
        <div className={productImage} style={{ position: "relative" }}>
          {useGatsbyImageData ? (
            <GatsbyImage
              image={image}
              alt={title}
              className={cardImageZoomIn}
            />
          ) : (
            <img
              className={cardImageZoomIn}
              src={imageSource}
              alt={title}
              width="100%"
              // onClick={() => navigate(`/product/${handle}`)}
            />
          )}
        </div>
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          {compareAtPrice && (
            <SaleLabel
              priceAmount={price}
              compareAtPriceAmount={compareAtPrice}
            />
          )}
        </div>
      </div>
      <Card.Body className={`text-center`}>
        <Card.Title className={productCardTitle}>{title}</Card.Title>
        <Card.Text>
          <Price
            priceAmount={getFormattedPrice(price)}
            compareAtPriceAmount={
              compareAtPrice && getFormattedPrice(compareAtPrice)
            }
            className="d-inline"
          />{" "}
          <Ratings color={"#cc3399"} className="d-inline" />
          {!availableForSale && <SoldOutLabel />}
        </Card.Text>
        <PrimaryButton
          className="px-5 py-3"
          disabled={!availableForSale}
          onClick={onClickAddToCart}
        >
          Add to cart
        </PrimaryButton>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

//=============================================================================
