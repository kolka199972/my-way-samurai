import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Kolya</div>
        <div className={s.dialog}>Julia</div>
        <div className={s.dialog}>Kirill</div>
        <div className={s.dialog}>Dasha</div>
        <div className={s.dialog}>Sveta</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>My name</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
