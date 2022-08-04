import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Kolya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Julia</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Kirill</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Dasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Sveta</NavLink>
        </div>
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
