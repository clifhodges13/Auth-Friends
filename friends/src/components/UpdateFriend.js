import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'

export default function UpdateFriend(props) {

  console.log(props)

  const [updatedFriend, setUpdatedFriend] = useState({
    id: props.friend.id,
    name: props.friend.name,
    age: props.friend.age,
    email: props.friend.email
  })

  const handleChange = e => {
    setUpdatedFriend({
      ...updatedFriend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    api()
      .put('/api/friends', updatedFriend)
      .then(res => {
        console.log(res)
        props.history.push('/friends')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Update friend!</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={updatedFriend.name}
          onChange={handleChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="email"
          value={updatedFriend.email}
          onChange={handleChange}
        />
        <input 
          type="number"
          name="age"
          placeholder="age"
          value={updatedFriend.age}
          onChange={handleChange}
        />
        <button type="submit">Update Friend</button>
        <Link to="/friends">Cancel</Link>
      </form>
    </div>
  )
}
