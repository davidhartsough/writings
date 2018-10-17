import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import IndexHelmet from '../components/IndexHelmet'

export default ({ data }) => (
  <Layout>
    <IndexHelmet data={data.site.siteMetadata} />
    <header>
      <h1>Writings</h1>
      <p className="subheading">
        by{' '}
        <a href={data.site.siteMetadata.authorUrl}>
          {data.site.siteMetadata.author}
        </a>
      </p>
    </header>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            ({node.frontmatter.date}) {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
        image
        schemaType
        authorUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
