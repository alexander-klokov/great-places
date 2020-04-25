import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {MainHeader} from './MainHeader'
import {NavLinks} from './NavLinks'
import {SideDrawer} from './SideDrawer'
import {Backdrop} from '../UIElements/Backdrop'


import './MainNavigation.css'


const maybeSideDrawer = isOpen => {
  if (!isOpen) {
    return null
  }
  return (
    <SideDrawer show={isOpen}>
    <nav className="main-navigation__drawer-nav">N
        <NavLinks />
    </nav>
  </SideDrawer>
  )
}

export const MainNavigation = props => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const openDrawerHandler = () => {
      setIsDrawerOpen(true)
    }

    const closeDrawerHandler = () => {
      setIsDrawerOpen(false)
    }

    return (
    <React.Fragment>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler}/>}
      {maybeSideDrawer(isDrawerOpen)}

      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler} >
        <nav className="main-navigation__drawer-nav">N
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}> 
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">GreatPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  </React.Fragment>
)}