import React from 'react';
import PropTypes from 'prop-types';
import DarkModeToggle from './DarkModeToggle';
import BackTo from './BackTo';

const Actions = ({ backTo, darkMode, onDarkModeToggle }) => (
  <div className="absolute h-24 mt-5 z-50 w-screen">
    <div className="relative flex justify-between items-center h-full max-w-screen-lg mx-auto">
      <BackTo data={backTo} />
      <DarkModeToggle value={darkMode} onToggle={onDarkModeToggle} />
    </div>
  </div>
);

Actions.propTypes = {
  backTo: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  darkMode: PropTypes.bool.isRequired,
  onDarkModeToggle: PropTypes.func.isRequired,
};

export default Actions;