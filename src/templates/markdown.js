import React from "react";
import { graphql } from "gatsby";
import BaseHelmet from "../components/BaseHelmet";
import PageHelmet from "../components/PageHelmet";
import PageNav from "../components/PageNav";

export default function MarkdownPage({ data }) {
  const { html, frontmatter, fields } = data.markdownRemark;
  const slug = fields.slug.substring(1);
  const { title, date, keywords, description } = frontmatter;
  return (
    <main>
      <BaseHelmet />
      <PageHelmet
        title={title}
        description={description}
        keywords={keywords}
        slug={slug}
      />
      <PageNav />
      <header>
        <h1 className="heading">{title}</h1>
        <p className="date">{date}</p>
      </header>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

export const query = graphql`
  query MarkdownQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        keywords
      }
      fields {
        slug
      }
    }
  }
`;
