import React from 'react';
import './Profile.css';
const Card = ({ user }) => {
  const {
    avatar_url,
    name,
    bio,
    location,
    followers,
    following,
    public_repos,
    html_url,
    login,
    created_at,
  } = user;
  return (
    <div className='user'>
      <div className='user-detail'>
        <img src={avatar_url} alt='avatar' />
        <h1>{name || login}</h1>
        <p>{bio}</p>
        <p>{location}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <a href={html_url} target='_blank'> Visit Github Profile</a>
        <p>user joined on: {" "}
          {new Date(created_at).toDateString().split(' ').slice(1).join(' ')}
        </p>

      </div>
    </div>
  );
};

export default Card;
