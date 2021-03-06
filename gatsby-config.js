module.exports = {
  siteMetadata: {
    title: `frigatebird gatsbyjs`,
    description: `frigatebird gatsbyjs boiler template`,
    author: `@fgb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fgb_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        images: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["API_URL"],
      },
    },
  ],
}
