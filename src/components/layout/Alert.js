import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

export const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={faGgCircle} /> {alert.message}
      </div>
    )
  );
};

Alert.prototype = {
  alert: PropTypes.object.isRequired
};
