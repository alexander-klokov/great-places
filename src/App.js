import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import {Users} from './user/pages/Users'
import {NewPlace} from './places/pages/NewPlace'
import {UpdatePlace} from './places/pages/UpdatePlace'
import {UserPlaces} from './places/pages/UserPlaces'
import {MainNavigation} from './shared/components/Navigation/MainNavigation'

export const App = () => (
  <div>
    <MainNavigation />
    <main>
    <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/:userId/places">
        <UserPlaces />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Route exact path="/places/:placeId">
        <UpdatePlace />
      </Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </div>
)
