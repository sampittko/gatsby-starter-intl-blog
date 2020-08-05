import React from "react";

import Image from "./image/Image";
import Links from "./links/Links";
import OpenToWork from "./openToWork/OpenToWork";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          openToWork
        }
      }
    }
  }
`;

const Header = ({ backTo }) => {
  const data = useStaticQuery(query);
  const { openToWork } = data.site.siteMetadata.author;

  return (
    <header className="container px-5 py-8 mx-auto">
      {openToWork && <OpenToWork />}
      <Links />
      <Image backTo={backTo} />
    </header>
  );
};

Header.defaultProps = {
  backTo: null,
};

Header.propTypes = {
  backTo: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Header;
