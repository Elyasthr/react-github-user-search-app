import React from 'react';

const HeaderCard = ({userData}) => {
  const {avatar_url, name, login} = userData;
  
  return (
    <div className='card-header'>
      <img src={avatar_url} alt="pic"/>
      <div className='card-user'>
        <h1>{name ? name : login}</h1>
        <h3>@{login}</h3>
        <h5>Joinded 25 Jan 2011</h5>
      </div>
    </div>
  );
};

export default HeaderCard;

