module.exports = {
  siteMetadata: {
    title: `danlee.org`,
    description: `A site about Daniel Lee, crypto enthusiast, software developer, and some dude on the web`,
    author: `Daniel Lee`,
    siteUrl: `https://danlee.org`,
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
    
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
