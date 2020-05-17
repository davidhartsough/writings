import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <Helmet>
    <title>{data.title} | David Hartsough</title>
    <meta name="description" content={data.description} />
    <meta name="keywords" content={data.keywords} />
    <link rel="canonical" href={data.url} />
    <meta property="og:title" content={data.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={data.url} />
    <meta property="og:description" content={data.description} />
    <script type="application/ld+json">{`
      {
        "@context": "http://schema.org/",
        "@type": "BlogPosting",
        "name": "${data.title}",
        "url": "${data.url}",
        "headline": "${data.title}",
        "keywords": "${data.keywords}",
        "description": "${data.description}",
        "image": "${data.image}",
        "author": {
          "@type": "Person",
          "name": "${data.author}",
          "url": "${data.authorUrl}"
        }
      }
    `}</script>
  </Helmet>
)
