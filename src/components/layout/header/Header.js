import React from "react";

import Hero from "./hero/Hero";
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

const Header = ({ backTo, darkMode, onDarkModeToggle }) => {
  const data = useStaticQuery(query);
  const { openToWork } = data.site.siteMetadata.author;

  return (
    <header className="container px-5 py-8 mx-auto">
      {openToWork && <OpenToWork />}
      <Links />
      <Hero
        backTo={backTo}
        darkMode={darkMode}
        onDarkModeToggle={onDarkModeToggle}
      />
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
  darkMode: PropTypes.bool.isRequired,
  onDarkModeToggle: PropTypes.func.isRequired,
};

export default Header;
