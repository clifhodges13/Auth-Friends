import React, { useContext } from 'react'
import { FriendsContext } from '../contexts/FriendsContext'

export default function FriendsList(props) {

  const friends = useContext(FriendsContext)

  return (
    <div>
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
