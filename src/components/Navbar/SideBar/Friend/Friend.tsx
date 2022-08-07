import React from 'react'
import s from './Friend.module.css'

interface FriendProps {
  name: string
}

const Friend = ({name}: FriendProps) => {
  return (
    <div className={s.friend}>
      <p>{name}</p>
    </div>
  )
}

export default Friend
