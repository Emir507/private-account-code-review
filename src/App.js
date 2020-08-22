import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom'

import Auth from './components/Auth/Auth'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Profile from './components/Profile/Profile'

import './App.css'


export default function App() {
  let [url, setAvatarUrl] = useState('')
  let [, setUsername] = useState('')

  function getUserData(url, username) {
    setAvatarUrl(url)
    setUsername(username)
    localStorage.setItem('avatar_url', url)
    localStorage.setItem('username', username)
  }
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Auth getUserData={getUserData}/>
          </Route>
          <PrivateRoute path='/'>
            <Profile url={url}/> 
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}