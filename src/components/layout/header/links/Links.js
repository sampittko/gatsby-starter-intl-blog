import React from "react";
import Home from "./Home";
import UserName from "./UserName";
import Socials from "./Socials";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allSite {
      edges {
        node {
          siteMetadata {
            author {
              fullName
              email
              userName
              socials {
                gitHub {
                  url
                  name
                }
                linkedIn {
                  name
                  url
                }
                twitter {
                  url
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Links = () => {
  const data = useStaticQuery(query);
  const {
    fullName,
    userName,
    socials,
  } = data.allSite.edges[0].node.siteMetadata.author;

  return (
    <div className="flex items-center sm:flex-row flex-col">
      <Home fullName={fullName} />
      <UserName userName={userName} />
      <Socials socials={socials} />
    </div>
  );
};

export default Links;
