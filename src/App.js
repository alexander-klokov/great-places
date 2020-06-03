import React, {useState, useEffect, useCallback} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css'

import {Auth} from './user/pages/Auth'
import {Users} from './user/pages/Users'
import {NewPlace} from './places/pages/NewPlace'
import {UpdatePlace} from './places/pages/UpdatePlace'
import {UserPlaces} from './places/pages/UserPlaces'
import {MainNavigation} from './shared/components/Navigation/MainNavigation'
import {AuthContext} from './shared/context/auth-context'

const TOKEN_EXPIRATION = 1000 * 60 * 60 // 1 hour

let logoutTimer

export const App = () => {

  const [token, setToken] = useState(false)
  const [tokenExpirationDate, setTokenExpirationDate] = useState()
  const [userId, setUserId] = useState(null)

  const login = useCallback((uid, token, expirationDate) => {
    setUserId(uid)
    setToken(token)
    const tokenExpirationDate = 
      expirationDate || new Date(new Date().getTime() + TOKEN_EXPIRATION)
    setTokenExpirationDate(tokenExpirationDate)

    localStorage.setItem(
      'userData', 
      JSON.stringify({userId: uid, token, expiration: tokenExpirationDate.toISOString()})
    )
  }, [])

  const logout = useCallback(uid => {
    setUserId(null)
    setToken(null)
    setTokenExpirationDate(null)
    localStorage.removeItem('userData')
  }, [])

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date()
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'))
    const expirationDate = new Date(storedData.expiration)
    if (storedData && storedData.token && expirationDate > new Date()) {
      login(storedData.userId, storedData.token, expirationDate)
    }
  }, [login])

  const routes = token ? (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
  ) : (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  
  return ( 
  <AuthContext.Provider value={{
    isLoggedIn: !!token, 
    token,
    userId, 
    login, 
    logout
    }}>
    <Router>
    <div>
      <MainNavigation />
      <main>
        {routes}
      </main>
    </div>
    </Router>
  </AuthContext.Provider>
)}
