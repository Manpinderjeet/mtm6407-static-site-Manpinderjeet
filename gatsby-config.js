module.exports = {
  siteMetadata: {
    title: `My Photography Site`,
    description: `A photography portfolio website`,
    author: `@yourname`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Photography Site`,
        short_name: `Photography`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // Provide an empty icons array to satisfy the plugin requirement
        icons: [],
      },
    },
  ],
};
