import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noreferrer noopener'>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired
};
