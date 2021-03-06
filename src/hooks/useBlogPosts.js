import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    sk: allFile(
      filter: { sourceInstanceName: { eq: "sk/blog" } }
      sort: { order: DESC, fields: childMdx___frontmatter___post_date }
      limit: 1000
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              post_title
              post_category
              post_date(formatString: "D. MMM YYYY", locale: "sk")
            }
            fields {
              slug
              categorySlug
            }
          }
        }
      }
    }
    en: allFile(
      filter: { sourceInstanceName: { eq: "en/blog" } }
      sort: { order: DESC, fields: childMdx___frontmatter___post_date }
      limit: 1000
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              post_title
              post_category
              post_date(formatString: "D. MMM YYYY", locale: "en")
            }
            fields {
              slug
              categorySlug
            }
          }
        }
      }
    }
  }
`;

export const useBlogPosts = (locale, limit) => {
  const data = useStaticQuery(query);

  const blogPosts = data[locale].edges
    .filter((blogPost) => blogPost.node.childMdx !== null)
    .slice(0, limit);

  return blogPosts;
};
