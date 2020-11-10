const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode, basePath: "markdown" });
    createNodeField({ name: "slug", node, value });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) throw result.errors;
  const posts = result.data.allMarkdownRemark.edges;
  const component = path.resolve("./src/templates/markdown.js");
  const slugs = posts.map(({ node: { fields } }) => fields.slug);
  slugs.forEach(slug => {
    createPage({ path: slug, component, context: { slug } });
  });
};
