import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = ({state, onUpdateNewMessageText, onAddMessage}) => {
  const newMessageElement = React.createRef()

  const createMessage = () => {
    onAddMessage()
  }
  const onUpdateText = () => {
    const text = newMessageElement.current.value
    onUpdateNewMessageText(text)
  }

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={state.newMessageText}
            onChange={onUpdateText}
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={createMessage}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
