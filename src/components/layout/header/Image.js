import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby';

const Image = ({ className }) => (
  <>
    <div className={`absolute left-0 w-screen`}>
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "the_high_tatras.jpg" }) {
              childImageSharp {
                fixed(width: 4000, height: 3000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={(data) => (
          <Img
            className={`mx-auto max-w-screen-lg ${className}`}
            fluid={data.file.childImageSharp.fixed}
          />
        )}
      />
    </div>
    <div className={`invisible ${className}`} />
  </>
);

Image.defaultProps = {
  className: "",
};

Image.propTypes = {
  className: PropTypes.string,
};

export default Image;