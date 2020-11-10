import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "normalize.css";
import "./base.css";

export default function BaseHelmet() {
  const {
    site: {
      siteMetadata: { name, color, baseUrl }
    }
  } = useStaticQuery(
    graphql`
      query BaseHelmet {
        site {
          siteMetadata {
            name
            color
            baseUrl
          }
        }
      }
    `
  );
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <meta name="author" content={name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={name} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href={`${baseUrl}favicon-16x16.png`}
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href={`${baseUrl}favicon-32x32.png`}
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href={`${baseUrl}icon192.png`}
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href={`${baseUrl}icon.png`}
        rel="icon"
        sizes="512x512"
        type="image/png"
      />
      <link
        href={`${baseUrl}apple-touch-icon.png`}
        rel="apple-touch-icon"
        sizes="180x180"
      />

      <meta
        name="msapplication-TileImage"
        content={`${baseUrl}mstile-144x144.png`}
      />
      <meta name="msapplication-TileColor" content={color} />
      <link rel="mask-icon" href={`${baseUrl}mask-icon.svg`} color={color} />
      <meta name="theme-color" content={color} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={`${baseUrl}icon.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`${name}'s logo`} />
    </Helmet>
  );
}
