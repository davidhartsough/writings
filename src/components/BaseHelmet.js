import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "normalize.css";
import "./base.css";

export default function BaseHelmet() {
  const {
    site: {
      siteMetadata: { name, color, siteUrl },
    },
  } = useStaticQuery(
    graphql`
      query BaseHelmet {
        site {
          siteMetadata {
            name
            color
            siteUrl
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
        href={`${siteUrl}/favicon-16x16.png`}
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href={`${siteUrl}/favicon-32x32.png`}
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href={`${siteUrl}/icon192.png`}
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href={`${siteUrl}/icon.png`}
        rel="icon"
        sizes="512x512"
        type="image/png"
      />
      <link
        href={`${siteUrl}/apple-touch-icon.png`}
        rel="apple-touch-icon"
        sizes="180x180"
      />

      <meta
        name="msapplication-TileImage"
        content={`${siteUrl}/mstile-144x144.png`}
      />
      <meta name="msapplication-TileColor" content={color} />
      <link rel="mask-icon" href={`${siteUrl}/mask-icon.svg`} color={color} />
      <meta name="theme-color" content={color} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={`${siteUrl}/icon.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`${name}'s logo`} />
    </Helmet>
  );
}
