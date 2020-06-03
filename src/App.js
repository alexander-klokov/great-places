import React, {useState, useCallback} from 'react';
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

export const App = () => {

  const [token, setToken] = useState(false)
  const [userId, setUserId] = useState(null)

  const login = useCallback((uid, token) => {
    setUserId(uid)
    setToken(token)
  }, [])

  const logout = useCallback(uid => {
    setUserId(null)
    setToken(null)
  }, [])

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
