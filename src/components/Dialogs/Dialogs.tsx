import React, {RefObject} from 'react'
import {IAction, IDialogsPage} from '../../models'
import {
  addMessageCreator,
  updateNewMessageTextCreator
} from '../../redux/dialogsReducer'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

interface DialogsProps {
  dialogsPage: IDialogsPage
  dispatch: (action: IAction) => void
}

const Dialogs = ({dialogsPage, dispatch}: DialogsProps) => {
  const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

  const createMessage = () => {
    dispatch(addMessageCreator())
  }
  const onUpdateText = () => {
    const text = newMessageElement.current!.value
    dispatch(updateNewMessageTextCreator(text))
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
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={dialogsPage.newMessageText}
            placeholder='Enter your message'
            onChange={onUpdateText}
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
