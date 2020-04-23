import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import {Users} from './user/pages/Users'
import {NewPlace} from './places/pages/NewPlace'
import {MainNavigation} from './shared/components/Navigation/MainNavigation'

export const App = () => (
  <div>
    <MainNavigation />
    <main>
    <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </div>
)
