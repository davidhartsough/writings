module.exports = {
  siteMetadata: {
    title: "Writings by David Hartsough",
    description:
      "David Hartsough is widely regarded as a happy human, conversationalist, drummer, developer, designer, wannabe psychologist, imminent philosopher, and stuntman — more or less. These are his projects.",
    keywords:
      "david, hartsough, davidhartsough, writings, blog, articles, essays, thoughts, thinkpiece",
    baseKeywords: "david, hartsough, ",
    name: "David Hartsough",
    color: "#198bed",
    url: "https://davidhartsough.com/writings/",
    siteUrl: "https://davidhartsough.com/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-51999116-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/markdown/",
      },
      __key: "markdown",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-external-links",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
  ],
  pathPrefix: "/writings",
};
