import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../../components/layout/Layout";

const BlogIndexTemplate = ({ pageContext, intl }) => {
  const { blogPosts } = pageContext;

  return (
    <Layout>
      <ul>
        {blogPosts.map((blogPost, index) => (
          <div
            key={`blog-post-${index}`}
            class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900 uppercase">
                {blogPost.frontmatter.post_category}
              </span>
              <span class="mt-1 text-gray-500 text-sm">
                {blogPost.frontmatter.post_date}
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {blogPost.frontmatter.post_title}
              </h2>
              <p class="leading-relaxed">{blogPost.excerpt}</p>
              {/* <a class="text-indigo-500 inline-flex items-center mt-4">
                {intl.formatMessage({ id: 'blog.readmore' })}
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);
