import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Link';
import { injectIntl } from 'gatsby-plugin-intl';

const Home = ({ className, photoUrl, fullName }) => (
  <Link to="/" className={className} groupHover>
    <img
      src={photoUrl}
      alt=""
      className="block sm:inline-block mx-auto sm:mx-0 transition-colors ease-linear duration-150 rounded-full h-10 w-10 border-4 border-gray-300 box-content group-hover:border-gray-700"
    />
    <span className="block sm:inline-block transition-colors ease-linear duration-150 h-full ml-0 mt-3 sm:mt-0 sm:ml-3 text-xl align-middle group-hover:text-gray-700">
      {fullName}
    </span>
  </Link>
);

Home.defaultProps = {
  className: "",
}

Home.propTypes = {
  className: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default injectIntl(Home);