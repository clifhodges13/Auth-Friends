import React, { useState, useContext } from 'react'
import api from '../utils/api'
import { SetFriendsContext } from '../contexts/SetFriendsContext'
import { FriendsContext } from '../contexts/FriendsContext'

export default function AddFriendForm(props) {

  const friends = useContext(FriendsContext)
  const setFriends = useContext(SetFriendsContext)

  const [friend, setFriend] = useState({
    id: friends.length + 1,
    name: '',
    age: 0,
    email: '',
  })

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    api()
      .post('/api/friends', friend)
      .then(res => {
        console.log(res)
        setFriends(res.data)
        props.history.push('/friends')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Add a friend!</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={friend.name}
          onChange={handleChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="email"
          value={friend.email}
          onChange={handleChange}
        />
        <input 
          type="number"
          name="age"
          placeholder="age"
          value={friend.age}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  )
}
