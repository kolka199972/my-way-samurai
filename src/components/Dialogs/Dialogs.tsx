import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {IDialog, IMessage} from '../../models'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

interface DialogsProps {
  dialogs: IDialog[]
  messages: IMessage[]
  onCreateMessage: (newMessageText: string) => void
}

const DialogsForm = ({handleSubmit}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={'textarea'}
          name='newMessageText'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'DialogsNewMessageText'})(DialogsForm)

const Dialogs = ({dialogs, messages, onCreateMessage}: DialogsProps) => {
  const createMessage = (values: any) => {
    onCreateMessage(values.newMessageText)
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
          <DialogsReduxForm onSubmit={createMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
