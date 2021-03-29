module.exports = {
  siteMetadata: {
    title: `Villa Mazzara`,
    description: `Casa rural amb encant al Maresme.`,
    author: `Alice Novell`,
    supportedLanguages: ['ca','es','en','fr']
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hn393v0b`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        //token: process.env.SANITY_TOKEN,
        token:'skmIJZpsqaJ75kRreCtD5oAEbT38tAKlw9sZ5b4BcAfcsIUv330Arqs755z80C0Sz9VMicvbbcPhnym1LPJquoUZQqrHhjJB2TzXrWFH6sniP6ifQx0dGn4LsOLOymIJisPsR2GffLhGwlnhJJXuojWCp1n2Dd8ZKNvH75wAf329Kpkw7A2t',
        overlayDrafts: true,
        watchMode: true
      },
      
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Material Icons`,

        ],
        display: 'swap'
      }},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
