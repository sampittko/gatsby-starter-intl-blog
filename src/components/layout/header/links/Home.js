import React from "react";
import PropTypes from "prop-types";
import Link from "../../../Link";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Home = ({ fullName }) => (
  <Link
    to="/"
    className="block sm:flex font-medium items-center md:justify-start justify-center group"
  >
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "favicon.png" }) {
            childImageSharp {
              fixed(width: 96, height: 96) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img
          className="border-gray-300 dark:border-gray-700 group-hover:border-gray-700 dark-group-hover:border-gray-300 mx-auto sm:mx-0 rounded-full border-4 box-content"
          fixed={data.file.childImageSharp.fixed}
          alt=""
          style={{ display: "block", height: "2.5rem", width: "2.5rem" }}
        />
      )}
    />
    <span className="block sm:inline-block h-full ml-0 mt-3 sm:mt-0 sm:ml-3 text-xl align-middle text-black dark:text-gray-300 group-hover:text-gray-700 dark-group-hover:text-white">
      {fullName}
    </span>
  </Link>
);

Home.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default Home;
