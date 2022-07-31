import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <button className={`${s.item} ${s.active}`}>Profile</button>
      </div>
      <div>
        <button className={s.item}>Messages</button>
      </div>
      <div>
        <button className={s.item}>News</button>
      </div>
      <div>
        <button className={s.item}>Music</button>
      </div>
      <div>
        <button className={s.item}>Settings</button>
      </div>
    </nav>
  )
}

export default Navbar
