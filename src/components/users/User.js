import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propsTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      company,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable:{' '}
        <FontAwesomeIcon
          className={hireable ? 'text-success' : 'text-danger'}
          icon={hireable ? faCheck : faTimesCircle}
        />
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              style={{ width: '150px' }}
              alt='avatar'
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              View Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    <a href={blog} target='_blank' rel='noreferrer noopener'>
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center'>
          <div className='badge badge-primary'>Followers:{followers}</div>
          <div className='badge badge-success'>following:{following}</div>
          <div className='badge badge-light'>Public Repos:{public_repos}</div>
          <div className='badge badge-dark'>Public Gists:{public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
