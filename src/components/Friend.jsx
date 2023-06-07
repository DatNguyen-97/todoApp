import React from 'react';
import { useParams } from 'react-router-dom';

const Friend = () => {
    const param = useParams();
    console.log('friend',param)
  return (
    <div>Friend : </div>
  )
}

export default Friend