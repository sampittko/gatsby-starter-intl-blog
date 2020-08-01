import React from "react";

import Image from "./Image";
import Links from "./links/Links";
import OpenToWork from "./openToWork/OpenToWork";
import { useStaticQuery, graphql } from "gatsby";

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

const Header = () => {
  const data = useStaticQuery(query);
  const { openToWork } = data.site.siteMetadata.author;

  return (
    <header className="container px-5 py-8 mx-auto">
      {openToWork && <OpenToWork />}
      <Links />
      <Image />
    </header>
  );};

export default Header;
