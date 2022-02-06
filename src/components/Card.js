import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderCard from './HeaderCard';
import BodyCard from './BodyCard';
import FooterCard from './FooterCard';

const Card = ({theme}) => {
//faire un use state avec pour valeur paar default le truc otocat comme demander
  const [userId,setUserId] = useState('octocat');
  const [userData,setUserData] = useState({});
  const neededValue = ['login','avatar_url','name','company','blog','location','bio','twitter_username','public_repos','followers','following','created_at'];

  useEffect(()=>{
    axios
      .get('https://api.github.com/users/'+ userId)
      .then((res) => {
        const dataArray = Object.entries(res.data);
        const filteredArray = dataArray.filter(([key,value]) => neededValue.includes(key));
        const dataObject = Object.fromEntries(filteredArray);
        setUserData(dataObject);
      })
      .catch((err) => console.log(err))
  },[])

  return (
    <div className='card'>
      <HeaderCard userData={userData}/> 
      <BodyCard userData={userData}/>
      <FooterCard userData={userData} theme={theme}/>
    </div>
  );
};

export default Card;