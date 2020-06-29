import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../../components/layout/Layout"

const BlogIndexTemplate = ({ pageContext }) => {
  const { blogPosts } = pageContext

  console.log(blogPosts)

  return (
    <Layout>
      {blogPosts.map((blogPost, index) =>
        <div key={index}>
          {JSON.stringify(blogPost, null, 2)}
        </div>
      )}
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);