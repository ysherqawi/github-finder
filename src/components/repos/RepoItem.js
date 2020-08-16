import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => (
  <div className='card'>
    <h3>
      <a href={repo.html_url} target='new'>
        {repo.name}
      </a>
    </h3>
  </div>
);

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
