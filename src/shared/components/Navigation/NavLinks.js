import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

export const NavLinks = props => {
  return <ul className="nav-links">
      <li>
          <NavLink exact to="/"> ALL USERS </NavLink>
      </li>
      <li>
          <NavLink to="/u1/places"> MY PLACES </NavLink>
      </li>
      <li>
          <NavLink to="/places/new"> ADD PLACES </NavLink>
      </li>
      <li>
          <NavLink to="/auth"> AUTHENTICATE </NavLink>
      </li>
  </ul>
}