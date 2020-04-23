import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import {Users} from './user/pages/Users'
import {NewPlace} from './places/pages/NewPlace'

export const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>
)
