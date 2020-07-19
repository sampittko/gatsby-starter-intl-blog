import { useStaticQuery, graphql } from "gatsby";

export const useBlogPosts = (locale, limit) => {
  const data = useStaticQuery(
    graphql`
      query {
        sk: allFile(
          filter: { sourceInstanceName: { eq: "sk/blog" } }
          sort: {
            order: ASC
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
                  post_date
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
        en: allFile(
          filter: { sourceInstanceName: { eq: "en/blog" } }
          sort: {
            order: ASC
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
                  post_date
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
      }
    `
  );

  const blogPosts = data[locale].edges.slice(0, limit);

  return blogPosts;
};