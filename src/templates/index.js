import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../components/Link";

const IndexPage = ({ pageContext, intl }) => (
  <Layout>
    <SEO
      lang={pageContext.intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
    {/* <div dangerouslySetInnerHTML={{ __html: pageContext.index }} /> */}
    {pageContext.blogPosts.map((blogPost, index) => (
      <div
        key={`blog-post-${index}`}
        className="py-8 flex flex-wrap md:flex-no-wrap"
      >
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="tracking-widest font-medium title-font text-gray-900">
            <Link to={blogPost.slugs.category}>
              {blogPost.frontmatter.post_category}
            </Link>
          </span>
          <span className="mt-1 text-gray-500 text-sm">
            {blogPost.frontmatter.post_date}
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {blogPost.frontmatter.post_title}
          </h2>
          <p className="leading-relaxed">blogPost.excerpt</p>
          <Link
            to={blogPost.slugs.post}
            className="text-indigo-500 inline-flex items-center mt-4"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    ))}
  </Layout>
);

export default injectIntl(IndexPage);
