import React from 'react'
import Friend from './Friend/Friend'
import s from './SideBar.module.css'

const SideBar = ({friends}) => {
  const friendsElements = friends.map((f) => (
    <Friend key={f.id} name={f.name} />
  ))
  return (
    <div className={s.sideBar}>
      <h2 className={s.title}>Friends</h2>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  )
}

export default SideBar
