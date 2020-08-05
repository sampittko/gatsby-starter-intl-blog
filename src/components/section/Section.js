import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import BlogPostMeta from "./BlogPostMeta";

const Section = ({ title, blogPostMeta, render }) => (
  <div className="px-5 pb-16">
    <Title title={title} blogPostMeta={!!blogPostMeta} />
    {blogPostMeta && <BlogPostMeta data={blogPostMeta} />}
    {render()}
  </div>
);

Section.defaultProps = {
  blogPostMeta: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  blogPostMeta: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }).isRequired,
    publishedDate: PropTypes.string.isRequired,
  }),
  render: PropTypes.func.isRequired,
};

export default Section;
