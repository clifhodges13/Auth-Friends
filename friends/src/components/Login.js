import React, { useState } from 'react'
import api from '../utils/api'

export default function Login(props) {

  const [error, setError] = useState()

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)

    api()
      .post('/api/login', data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
      })
      .catch(err => {
        setError(err.response.data.error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <input 
        type="username"
        name="username"
        placeholder="username"
        value={data.username}
        onChange={handleChange}
      />
      <input 
        type="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  )
}
