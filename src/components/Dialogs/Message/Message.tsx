import React from 'react'
import s from './../Dialogs.module.css'

interface MessageProps {
  message: string | undefined
}

const Message = ({message}: MessageProps) => {
  return <div className={s.message}>{message}</div>
}

export default Message
