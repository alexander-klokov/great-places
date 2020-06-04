import React, {Suspense} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import {useAuth} from './shared/hooks/auth-hook'

import './App.css'

import {Users} from './user/pages/Users'
import {MainNavigation} from './shared/components/Navigation/MainNavigation'
import {AuthContext} from './shared/context/auth-context'
import {LoadingSpinner} from './shared/components/UIElements/LoadingSpinner'

const NewPlace = React.lazy(() => import('./places/pages/NewPlace'))
const UserPlaces = React.lazy(() => import('./places/pages/UserPlaces'))
const UpdatePlace = React.lazy(() => import('./places/pages/UpdatePlace'))
const Auth = React.lazy(() => import('./user/pages/Auth'))

export const App = () => {

  const {token, userId, login, logout} = useAuth()

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
        <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
          {routes}
        </Suspense>
      </main>
    </div>
    </Router>
  </AuthContext.Provider>
)}
