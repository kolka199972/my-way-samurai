import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
      <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    )
  }

  const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Kolya' id='1' />
        <DialogItem name='Julia' id='2' />
        <DialogItem name='Kirill' id='3' />
        <DialogItem name='Dasha' id='4' />
        <DialogItem name='Sveta' id='5' />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='I am Lion' />
        <Message message='My name' />
        <Message message='Yo' />
        <Message message='Yoooo' />
      </div>
    </div>
  )
}

export default Dialogs
