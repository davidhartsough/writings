module.exports = {
  siteMetadata: {
    title: 'Writings by David Hartsough',
    description:
      'David Hartsough is widely regarded as a happy human, drummer, developer, designer, psychologist, philosopher, and stuntman. These are his writings.',
    keywords:
      'david, hartsough, davidhartsough, writings, blog, articles, essays, thoughts, think, piece',
    baseKeywords: 'david, hartsough, ',
    author: 'David Hartsough',
    url: 'https://davidhartsough.com/writings/',
    image: 'https://davidhartsough.com/android-chrome-512x512.png',
    imageAlt: "David Hartsough's logo",
    twitterSite: '@David_Hartsough',
    twitterCreator: '@David_Hartsough',
    schemaType: 'Blog',
    authorUrl: 'https://davidhartsough.com/',
    themeColorHex: '#198BED',
    siteUrl: `https://davidhartsough.com/writings/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-external-links',
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Writings by David Hartsough',
        short_name: "David's Writings",
        start_url: '/',
        background_color: '#198BED',
        theme_color: '#198BED',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-51999116-1',
      },
    },
  ],
  pathPrefix: `/writings`,
}