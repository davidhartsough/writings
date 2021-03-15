import React from "react";
import { Link, graphql } from "gatsby";
import BaseHelmet from "../components/BaseHelmet";
import HomeHelmet from "../components/HomeHelmet";

const Item = ({ slug, title, description }) => (
  <div className="item">
    <div className="item-text">
      <p className="item-title">
        <Link to={slug} className="item-title-link">
          {title}
        </Link>
      </p>
      <p className="item-description">{description}</p>
    </div>
  </div>
);

export default function IndexPage({ data }) {
  const items = data.allMarkdownRemark.edges.map(
    ({
      node: {
        id,
        frontmatter: { title, description },
        fields: { slug },
      },
    }) => ({ id, title, description, slug })
  );
  return (
    <div className="bg">
      <div className="pattern">
        <div className="index">
          <div className="central">
            <BaseHelmet />
            <HomeHelmet />
            <h1 className="title">
              Writings
              <span className="separator"> • </span>
              <a href="https://davidhartsough.com/" className="subtitle-link">
                David Hartsough
              </a>
            </h1>
            <div className="items">
              {items.map(({ id, title, description, slug }) => (
                <Item
                  key={id}
                  slug={slug}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
