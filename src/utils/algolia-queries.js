/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

const catalogueIndexName = `Catalogue`

//=============================================================================

const catalogueQuery = `{
  catalogue: allShopifyProduct {
    edges {
      node {
        id
        handle
        tags
        title
        variants {
          shopifyId
          availableForSale
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
          image {
            originalSrc
          }
        }
        description
      }
    }
  }
}`

function catalogueToAlgoliaRecord({
  node: { title, description, variants, ...rest },
}) {
  const [{ image, shopifyId, availableForSale, presentmentPrices }] = variants
  const priceNode = presentmentPrices.edges[0].node

  return {
    objectID: shopifyId,
    availableForSale,
    title,
    price: priceNode.price.amount,
    compareAtPrice:
      priceNode.compareAtPrice != null ? priceNode.compareAtPrice.amount : null,
    image,
    description: description,
    ...rest,
  }
}

const queries = [
  {
    query: catalogueQuery,
    transformer: async ({ data }) =>
      data.catalogue.edges.map(catalogueToAlgoliaRecord),
    indexName: catalogueIndexName,
    settings: {
      replicaUpdateMode: "replace",
      attributesToSnippet: [`description:20`, `variants`],
      attributesForFaceting: [`tags`],
    },
  },
]

module.exports = queries

//=============================================================================
