module.exports = {
  siteMetadata: {
    title: `Mayoneese`,
    description: `Get an awesome music track in your inbox every week. Join today 🔥`,
    facebookTitle: 'Get an awesome music track in your inbox every week 🔥',
    facebookDescription: 'Join Mayoneese today!',
    author: `Charly Martin`,
    siteUrl: `https://mayoneese.club/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // SOURCE FILE SYSTEM
    {
      // gatsby-source-filesystem adds the images and pages to the data layer
      // of Gastby (Accessible through GraphQL).
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },

    // MANIFEST GENERATOR FOR PWA
    {
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.app/offline
      // 'gatsby-plugin-offline',
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    // XML SITEMAP GENERATOR
    {
      // it uses the siteUrl in siteMetadata (line 2).
      // Make sure to update the url of the website
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    },

    // GOOGLE FONTS
    {
      // Prefetches webfonts during build, instead of loading external stylesheet at page load.
      // Increase performance.
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            variants: [`300`, `400`, `500`, `700`]
          },
          {
            family: `Overpass`,
            variants: [`300`, `400`, `600`, `700`]
          },
        ],
      },
    },
    
    // GOOGLE TAG MANAGER
    {
      // Simply load Google Tag Manager on the initial page/app load.
      resolve: `gatsby-plugin-google-tagmanager`,
      // options: {
      //   id: "YOUR_GOOGLE_TAGMANAGER_ID",
  
      //   // Include GTM in development.
      //   // Defaults to false meaning GTM will only be loaded in production.
      //   includeInDevelopment: false,
  
      //   // Specify optional GTM environment details.
      //   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
      //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      // },
    },
    
    // NETLIFY
    // {
      // Needs to be last in the array of plugins!
      // Seems fantastic to create on-the-spot redirects
      // https://www.gatsbyjs.org/docs/actions/#createRedirect
      // https://www.netlify.com/docs/redirects/
      // resolve: `gatsby-plugin-netlify`,
      // options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        // createRedirect({ fromPath: "/old-url", toPath: "/new-url", isPermanent: true }),
        // createRedirect({ fromPath: "/url", toPath: "/zn-CH/url", Language: "zn" }),
      // },
    // },
  ]
}
