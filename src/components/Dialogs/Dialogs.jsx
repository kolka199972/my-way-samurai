import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = ({dialogsData, messagesData}) => {
  const dialogsElements = dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = messagesData.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
