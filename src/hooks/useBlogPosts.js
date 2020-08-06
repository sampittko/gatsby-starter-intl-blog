import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    sk: allFile(
      filter: { sourceInstanceName: { eq: "sk/blog" } }
      sort: {
        order: DESC
        fields: childMarkdownRemark___frontmatter___post_date
      }
      limit: 100
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              post_title
              post_category
              post_date(formatString: "D. MMM YYYY", locale: "sk")
            }
            fields {
              slug
              categorySlug
            }
            excerpt
          }
        }
      }
    }
    en: allFile(
      filter: { sourceInstanceName: { eq: "en/blog" } }
      sort: {
        order: DESC
        fields: childMarkdownRemark___frontmatter___post_date
      }
      limit: 100
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              post_title
              post_category
              post_date(formatString: "D. MMM YYYY", locale: "en")
            }
            fields {
              slug
              categorySlug
            }
            excerpt
          }
        }
      }
    }
  }
`;

export const useBlogPosts = (locale, limit) => {
  const data = useStaticQuery(query)

  const blogPosts = data[locale].edges
    .slice(0, limit)
    .filter((blogPost) => blogPost.node.childMarkdownRemark !== null);

  return blogPosts;
};
