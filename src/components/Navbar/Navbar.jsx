import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import SideBar from './SideBar/SideBar'

const Navbar = ({state}) => {
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
      <SideBar friends={state.friends} />
    </nav>
  )
}

export default Navbar
