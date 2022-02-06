import React from 'react';

const HeaderCard = ({userData}) => {
  const {avatar_url, name, login,created_at} = userData;
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const dateCreation = new Date(created_at);
  const dateView = dateCreation.getDate() + ' ' + month[dateCreation.getMonth()] + ' ' + dateCreation.getFullYear();
  
  return (
    <div className='card-header'>
      <img src={avatar_url} alt="pic"/>
      <div className='card-user'>
        <h1>{name ? name : login}</h1>
        <h3>@{login}</h3>
        <h5>Joinded {dateView}</h5>
      </div>
    </div>
  );
};

export default HeaderCard;

