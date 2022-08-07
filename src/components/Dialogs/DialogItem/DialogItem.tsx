import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

interface DialogItemProps {
  id: number
  name: string
}

const DialogItem = ({id, name}: DialogItemProps) => {
  const path = '/dialogs/' + id
  return (
    <div>
      <NavLink className={s.dialog} to={path}>
        {name}
      </NavLink>
    </div>
  )
}

export default DialogItem
