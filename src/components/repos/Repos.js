import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from './../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
