/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

export const getTotalNumberOfItemsInCart = checkout => {
  const numberOfCartlines = checkout.lineItems.length
  let totalNumberOfItemsInCart = 0
  for (let i = 0; i < numberOfCartlines; i++) {
    totalNumberOfItemsInCart += checkout.lineItems[i].quantity
  }
  return totalNumberOfItemsInCart
}

//=============================================================================
