/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

export const getFormattedPrice = price => {
  return Intl.NumberFormat(undefined, {
    currency: "EUR",
    minimumFractionDigits: 2,
    style: "currency",
  }).format(parseFloat(price ? price : 0))
}

//=============================================================================
