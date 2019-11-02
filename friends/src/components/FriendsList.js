import React, { useState, useEffect } from 'react'
import api from '../utils/api'

import AddFriendForm from './AddFriendForm'

export default function FriendsList(props) {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    api()
      .get('/api/friends')
      .then(res => {
        console.log('/api/friends GET request:', res)
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <AddFriendForm friends={friends} />
      {friends.map((friend, index) => {
        return (
          <div key={index}>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png" 
              alt="friend"
              style={{width: '100px', height: 'auto'}}  
            />
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
          </div>
        )
      })}
    </div>
  )
}
