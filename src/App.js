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

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  const routes = isLoggedIn ? (
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
  <AuthContext.Provider value={{isLoggedIn, login, logout}}>
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
