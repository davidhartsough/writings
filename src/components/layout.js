import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import LayoutHelmet from './LayoutHelmet'
import DarkModeToggle from './DarkModeToggle'
import './base.css'
import './theme.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            author
            image
            imageAlt
            twitterSite
            twitterCreator
            themeColorHex
          }
        }
      }
    `}
    render={data => (
      <main>
        <LayoutHelmet data={data.site.siteMetadata} />
        <DarkModeToggle />
        <section>{children}</section>
      </main>
    )}
  />
)
