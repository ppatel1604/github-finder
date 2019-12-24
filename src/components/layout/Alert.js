import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={faInfoCircle} /> {alert.message}
      </div>
    )
  );
};

Alert.prototype = {
  alert: PropTypes.object.isRequired
};
