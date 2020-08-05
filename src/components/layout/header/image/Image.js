import React from "react";
import Img from "gatsby-image";
import BackArrow from "./BackTo";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";

const Image = ({ backTo, backToTitle }) => {
  const className = "h-24 w-full mt-5";

  return (
    <>
      <div className={`absolute left-0 w-screen`}>
        {backTo && <BackArrow to={backTo} title={backToTitle} />}
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
      </div>
      <div className={`invisible ${className}`} />
    </>
  );
};

Image.defaultProps = {
  backTo: null,
};

Image.propTypes = {
  backTo: PropTypes.string,
};

export default Image;
