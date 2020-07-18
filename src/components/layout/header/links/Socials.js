import React from "react";
import PropTypes from "prop-types";
import Link from "../../../Link";
import GitHub from "../../../../assets/img/social/github.svg";
import LinkedIn from "../../../../assets/img/social/linkedin.svg";
import Twitter from "../../../../assets/img/social/twitter.svg";

const getSocialDetails = (socials, socialName) => {
  let socialDetails = {};

  switch (socialName) {
    case socials.gitHub.name:
      socialDetails.social = socials.gitHub;
      socialDetails.IconComponent = GitHub;
      break;
    case socials.linkedIn.name:
      socialDetails.social = socials.linkedIn;
      socialDetails.IconComponent = LinkedIn;
      break;
    case socials.twitter.name:
      socialDetails.social = socials.twitter;
      socialDetails.IconComponent = Twitter;
      break;
    default:
      socialDetails.social = socials.twitter;
      socialDetails.IconComponent = Twitter;
      break;
  }

  return socialDetails;
};

const Socials = ({ className, socials }) => (
  <span className={className}>
    {Object.keys(socials).map((socialPage, index) => {
      const socialDetails = getSocialDetails(socials, socials[socialPage].name);
      const { IconComponent } = socialDetails;

      return (
        <Link
          key={index}
          to={socialDetails.social.url}
          title={socialDetails.social.name}
          foreign
        >
          <IconComponent className="w-5 h-auto fill-gray-500 hover:fill-gray-700 inline mx-1" />
        </Link>
      );
    })}
  </span>
);

Socials.defaultProps = {
  className: "",
};

Socials.propTypes = {
  className: PropTypes.string,
  socials: PropTypes.object.isRequired,
};

export default Socials;
