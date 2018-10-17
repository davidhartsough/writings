import React from 'react'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <meta name="author" content={data.author} />
    <meta property="og:image" content={data.image} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content={data.imageAlt} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content={data.title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={data.twitterSite} />
    <meta name="twitter:creator" content={data.twitterCreator} />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content={data.title} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content={data.title} />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-chrome-192x192.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    <meta name="msapplication-TileColor" content={data.themeColorHex} />
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color={data.themeColorHex}
    />
  </Helmet>
)
