import React from 'react'

export default function FriendsList(props) {
  const initialState = [
    {
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    },
    {
      id: 2,
      name: 'Sara',
      age: 29,
      email: 'sara@lambdaschool.com',
    }
  ]

  return (
    <div>
      {initialState.map((friend, index) => {
        return <p key={index}>{friend.name}</p>
      })}
    </div>
  )
}
