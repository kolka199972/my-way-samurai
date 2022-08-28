import React, {RefObject} from 'react'
import {IDialog, IMessage} from '../../models'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

interface DialogsProps {
  dialogs: IDialog[]
  messages: IMessage[]
  newMessageText: string
  onCreateMessage: () => void
  onUpdateText: (text: string) => void
}

const Dialogs = ({
  dialogs,
  messages,
  newMessageText,
  onCreateMessage,
  onUpdateText
}: DialogsProps) => {
  const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

  const createMessage = () => {
    onCreateMessage()
  }
  const updateText = () => {
    const text = newMessageElement.current!.value
    onUpdateText(text)
  }

  const dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageText}
            placeholder='Enter your message'
            onChange={updateText}
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={createMessage}>Add Message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
