 module.exports = {
  siteMetadata: {
    title: `hariswb`,
    description: `A portfolio`,
    credit: 'Powered by GatsbyJs',
    author: `hariswb`,
    about: `Hi, Welcome to my portfolio page! I'm a junior developer with self taught experience. I create simple web app and looking forward to work in a team especially within data visualization domain.`,
    twitter: "@example",
    github: "hariswb",
    email: "heyhey"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffd`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          `gatsby-remark-static-images`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-pages`,
        path: `${__dirname}/src/project-pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
