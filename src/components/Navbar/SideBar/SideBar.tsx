import React from 'react'
import Friend from './Friend/Friend'
import s from './SideBar.module.css'

interface SideBarProps {
  friends: Array<{
    id: number
    name: string
  }>
}

const SideBar = ({friends}: SideBarProps) => {
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
