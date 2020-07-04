import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <h1>
      {title}
      <div>
        {children}
      </div>
    </h1>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;