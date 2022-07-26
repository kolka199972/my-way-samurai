import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import SidebarContainer from './Sidebar/SidebarContainer'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to='/profile'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/dialogs'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/users'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/news'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/music'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/settings'
          className={(nl) => (nl.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <SidebarContainer />
    </nav>
  )
}

export default Navbar
