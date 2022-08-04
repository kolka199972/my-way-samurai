import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Kirill'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Sveta'}
  ]

  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I am Lion'},
    {id: 3, message: 'My name'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yoooo'}
  ]

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
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  )
}

export default Dialogs
