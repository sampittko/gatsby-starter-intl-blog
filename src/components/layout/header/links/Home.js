import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Link';

const Home = ({ className, photoUrl, fullName }) => (
  <Link
    to="/"
    className={className}
    groupHover
  >
    <img
      src={photoUrl}
      alt=""
      className="transition-colors ease-linear duration-150 inline-block rounded-full h-10 w-10 border-4 border-gray-300 box-content group-hover:border-gray-700"
    />
    <span className="transition-colors ease-linear duration-150 inline-block h-full ml-3 text-xl align-middle group-hover:text-gray-700">
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

export default Home;