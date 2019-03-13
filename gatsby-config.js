require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Mayoneese`,
    description: `Get awesome music tracks in your inbox every week. Join today 🔥`,
    facebookTitle: 'Get awesome music tracks in your inbox every week 🔥',
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
    
    // GOOGLE ANALYTICS
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
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
