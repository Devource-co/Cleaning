module.exports = {
  siteMetadata: {
    title: `Spectacle clean`,
    description: ``,
    author: `@bonvic7`,
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
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        "sourceMap": true,
        "autoLabel": process.env.NODE_ENV !== 'production',
        "labelFormat": "[local]",
        "cssPropOptimization": true
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#00c400`,
        showSpinner: true,
      },
    },
  ],
}
