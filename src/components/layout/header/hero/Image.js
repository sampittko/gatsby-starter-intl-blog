import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "header_image.jpg" }) {
          childImageSharp {
            fixed(width: 1024, height: 96) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        className={`mx-auto max-w-screen-lg ${className}`}
        fixed={data.file.childImageSharp.fixed}
        style={{ display: "block", width: "100%" }}
        alt=""
      />
    )}
  />
);

Image.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Image;