import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from './../layout/Spinner';
import Repos from '../repos/Repos';
import UserDetails from './UserDetails';
import GithubContext from './../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { loading, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <UserDetails />
      <Repos />
    </Fragment>
  );
};

export default User;
