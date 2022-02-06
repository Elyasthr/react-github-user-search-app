import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderCard from './HeaderCard';
import BodyCard from './BodyCard';
import FooterCard from './FooterCard';

const Card = ({theme,userId}) => {

  const [userData,setUserData] = useState({});
  

  useEffect(()=>{
    const neededValue = ['login','avatar_url','name','company','blog','location','bio','twitter_username','public_repos','followers','following','created_at'];

    axios
      .get('https://api.github.com/users/'+ userId)
      .then((res) => {
        const dataArray = Object.entries(res.data);
        const filteredArray = dataArray.filter(([key,value]) => neededValue.includes(key));
        const dataObject = Object.fromEntries(filteredArray);
        setUserData(dataObject);
      })
      .catch((err) => console.log(err))
  },[userId])

  return (
    <div className='card'>
      <HeaderCard userData={userData}/> 
      <BodyCard userData={userData}/>
      <FooterCard userData={userData} theme={theme}/>
    </div>
  );
};

export default Card;