import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { FriendsContext } from './contexts/FriendsContext';
import { SetFriendsContext } from './contexts/SetFriendsContext';
import ProtectedRoute from './components/ProtectedRoute';
import api from './utils/api';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

function App() {

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
    
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/friends">My Friends</Link>
        <Link to="/addfriend">Add Friend</Link>
        <Link to="/Logout">Logout</Link>
      </nav>
      
      <Route exact path="/" component={Login} />

      <FriendsContext.Provider value={friends}>
      <SetFriendsContext.Provider value={setFriends}>
        <ProtectedRoute exact path="/friends" component={FriendsList} />
        <ProtectedRoute exact path="/logout" component={Logout} />
        <ProtectedRoute exact path="/addfriend" component={AddFriendForm} />
      </SetFriendsContext.Provider>
      </FriendsContext.Provider>

    </div>
  );
}

export default App;
