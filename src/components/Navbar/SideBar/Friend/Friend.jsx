import React from 'react'
import s from './Friend.module.css'

const Friend = ({name}) => {
  return (
    <div className={s.friend}>
      <p>{name}</p>
    </div>
  )
}

export default Friend
