import React from 'react'
import {Link} from 'react-router-dom'

import {MainHeader} from './MainHeader'
import {NavLinks} from './NavLinks'
import './MainNavigation.css'

export const MainNavigation = props => (
  <MainHeader>
    <button className="main-navigation__menu-btn"> 
        <span />
        <span />
        <span />
    </button>
    <h1 className="main-navigation__title">
        <Link to="/">GreatPlaces</Link>
    </h1>
    <nav>
        <NavLinks />
    </nav>
  </MainHeader>
)