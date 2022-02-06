import React from 'react';

const BodyCard = ({userData}) => {
  const {bio,public_repos,followers,following} = userData;
  return (
      <div className='card-body'>
        <p className={bio ? "bio" : "bio no-bio"}>{bio ? bio : "This profile has no bio"}</p>
        <div className='card-stats'>
          <div className='user-stat'>
            <h4>Repos</h4>
            <h2>{public_repos}</h2>
          </div>
          <div className='user-stat'>
            <h4>Followers</h4>
            <h2>{followers}</h2>
          </div>
          <div className='user-stat'>
            <h4>Following</h4>
            <h2>{following}</h2>
          </div>
        </div>
      </div>
  );
};

export default BodyCard;