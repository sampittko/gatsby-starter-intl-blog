import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Section from "../components/section/Section";
import BlogPosts from "../components/blog/list/List";

const BlogIndexTemplate = ({ intl }) => {
  const title = intl.formatMessage({ id: "page.blog.title" });

  return (
    <Layout
      backTo={{
        to: "/",
        title: `${intl.formatMessage({ id: "backto" })} ${intl.formatMessage({
          id: "backto.homepage",
        })}`,
      }}
    >
      <SEO
        lang={intl.locale}
        title={title}
        slug="/blog/"
        description={intl.formatMessage({ id: "page.blog.description" })}
      />
      <Section title={title} render={() => <BlogPosts />} />
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);
