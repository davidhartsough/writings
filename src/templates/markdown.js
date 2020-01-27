import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import MarkdownHelmet from '../components/MarkdownHelmet'

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const md = data.markdownRemark
  return (
    <Layout>
      <MarkdownHelmet
        data={{
          title: md.frontmatter.title,
          description: md.frontmatter.description,
          keywords: `${meta.baseKeywords}${md.frontmatter.keywords}`,
          url: `${meta.url}${md.fields.slug.substring(1)}`,
          image: meta.image,
          author: meta.author,
          authorUrl: meta.authorUrl,
        }}
      />
      <header>
        <h1 className="heading">{md.frontmatter.title}</h1>
        <p className="subheading">
          by <Link to="/">{meta.author}</Link>{' '}
          <span className="date">({md.frontmatter.date})</span>
        </p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    </Layout>
  )
}

export const query = graphql`
  query MarkdownQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
        baseKeywords
        image
        authorUrl
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        keywords
      }
      fields {
        slug
      }
    }
  }
`
