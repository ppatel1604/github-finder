import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: faGithub
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default Navbar;
