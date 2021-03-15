import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./home.css";

export default function HomeHelmet() {
  const {
    site: {
      siteMetadata: { title, description, keywords, url },
    },
  } = useStaticQuery(
    graphql`
      query HomeHelmet {
        site {
          siteMetadata {
            title
            description
            keywords
            url
          }
        }
      }
    `
  );
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
