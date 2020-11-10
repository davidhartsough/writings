import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./theme.css";

export default function PageHelmet({ title, description, keywords, slug }) {
  const {
    site: {
      siteMetadata: { name, baseKeywords, url }
    }
  } = useStaticQuery(
    graphql`
      query PageHelmet {
        site {
          siteMetadata {
            name
            baseKeywords
            url
          }
        }
      }
    `
  );
  return (
    <Helmet>
      <title>{`${title} • ${name}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${baseKeywords}${keywords}`} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${url}${slug}`} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
