import React from 'react'
import {IFriend} from '../../../models'
import Friend from './Friend/Friend'
import s from './Sidebar.module.css'

interface SideBarProps {
  friends: IFriend[]
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
