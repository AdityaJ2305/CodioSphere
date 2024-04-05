import React from 'react'
import Avatar from 'react-avatar';

function Client({username}) {
  return (
    <div className='client'>
     <Avatar name={username} round="10px" size="40"/>
     <div><span>{username}</span></div>
    </div>
  )
}

export default Client
