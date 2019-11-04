import React, { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { FriendsContext } from '../contexts/FriendsContext'
import UpdateFriend from './UpdateFriend'

export default function FriendsList(props) {

  const friends = useContext(FriendsContext)

  return (
    <div className="FriendsList">
      {friends.map((friend, index) => {
        return (
          <div key={index} className="FriendCard">
            <img 
              src="https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png" 
              alt="friend"
              style={{width: '100px', height: 'auto'}}  
            />
            <div className="FriendInfo">
              <h3>{friend.name}</h3>
              <p>{friend.email}</p>
              <p>{friend.age} years old</p>
              <Link to='/updatefriend'>Update</Link>

              <Route exact path="/updatefriend" render={props => {
                return <UpdateFriend {...props} friend={friend} />
              }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
