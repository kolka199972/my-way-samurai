import React, {RefObject} from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

interface DialogsProps {
  dialogsPage: {
    dialogs: Array<{
      id: number
      name: string
    }>
    messages: Array<{
      id: number
      message: string
    }>
    newMessageText: string
  }
  onUpdateNewMessageText: (val: string) => void
  onAddMessage: () => void
}

const Dialogs = ({
  dialogsPage,
  onUpdateNewMessageText,
  onAddMessage
}: DialogsProps) => {
  const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

  const createMessage = () => {
    onAddMessage()
  }
  const onUpdateText = () => {
    const text = newMessageElement.current!.value
    onUpdateNewMessageText(text)
  }

  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={dialogsPage.newMessageText}
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
