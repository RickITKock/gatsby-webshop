/*****************************************************************************
@author Rick Kock
******************************************************************************/

// require("dotenv").config()

//=============================================================================

module.exports = {
  siteMetadata: {
    title: `WerkComfortabel`,
    description: `Look for the seating furniture that fits your needs.`,
    author: `@Rick`,
    siteUrl: "https://werkcomfortabel.gatsbyjs.io/", // TODO: Don't forget to update this
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `betrouwbare-koelkasten`,
        accessToken: `48788de50180a940b439c297ca6047b8`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WerkComfortabel`,
        short_name: `WerkComfortabel`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`, // for more info on this, see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "PZ53OH9TWR",
        apiKey: "3b38961ac0a3fcc9e7874ada47e47c59",
        queries: require("./src/utils/algolia-queries"),
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}

//=============================================================================
