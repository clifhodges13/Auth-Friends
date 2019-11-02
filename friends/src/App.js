import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/friends">My Friends</Link>
      </nav>
      
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />

    </div>
  );
}

export default App;
