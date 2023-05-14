/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useContext, useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import StoreContext from "../../../context/StoreContext"
import { toast } from "react-toastify"
import LoadingSpinnerWithOverLay from "../../../components/Loaders/LoadingSpinnerWithOverlay/LoadingSpinnerWithOverlay"
// import configData from "../../../global/global-config.json"
import PriceColumn from "./PriceColumn/PriceColumn"
import ImageColumn from "./ImageColumn/ImageColumn"
import InfoColumn from "./InfoColumn/InfoColumn"
import QuantityColumn from "./QuantityColumn/QuantityColumn"
import styles from "./line-item.module.css"
import { Button } from "react-bootstrap/Button"

//=============================================================================

const LineItem = ({ className, ...others }) => {
  const { item } = others
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)
  const toastStyle = {
    position: "top-right",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: null,
  }
  const [showLoadingSpinnerOverlay, setShowLoadingSpinnerOverlay] = useState(
    false
  )

  const itemChildrenColumnSizes = [
    { lg: 3, md: 5, sm: 6, xs: 12 },
    { lg: 9, md: 7, sm: 6, xs: 12 },
  ]
  const columnSizes = [
    { lg: 7, md: 6, sm: 12, xs: 12 },
    { lg: 2, md: 3, sm: 6, xs: 12 },
    { lg: 3, md: 3, sm: 6, xs: 12 },
  ]

  const handleUpdate = newQuantity => {
    if (newQuantity !== item.quantity) {
      setShowLoadingSpinnerOverlay(true)
      if (newQuantity < 1) {
        removeLineItem(client, checkout.id, item.id).then(() => {
          setShowLoadingSpinnerOverlay(false)
          toast.dark(`Removed ${item.title} from cart.`, {
            ...toastStyle,
          })
        })
      } else {
        updateLineItem(client, checkout.id, item.id, newQuantity).then(() => {
          toast.dark(`${item.title} updated!`, {
            ...toastStyle,
          })
        })
      }
    }
  }

  useEffect(() => {
    setShowLoadingSpinnerOverlay(false)
  }, [item.quantity])

  return (
    <div className={className}>
      <Row>
        <LoadingSpinnerWithOverLay animate={showLoadingSpinnerOverlay} />
        <Col {...columnSizes[0]}>
          <Row>
            <ImageColumn {...itemChildrenColumnSizes[0]} item={item} />
            <InfoColumn {...itemChildrenColumnSizes[1]} item={item} />
          </Row>
        </Col>
        <QuantityColumn
          {...columnSizes[1]}
          item={item}
          onUpdate={handleUpdate}
        />
        <PriceColumn {...columnSizes[2]} item={item} />
      </Row>
    </div>
  )
}

export default LineItem

//=============================================================================
