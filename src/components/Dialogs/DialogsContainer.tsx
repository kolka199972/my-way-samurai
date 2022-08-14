import React from 'react'
import {
  addMessageCreator,
  updateNewMessageTextCreator
} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

interface DialogsContainerProps {
  store: any
}

const DialogsContainer = ({store}: DialogsContainerProps) => {
  const dialogsPageState = store.getState().dialogsPage
  const {messages, dialogs, newMessageText} = dialogsPageState

  const onCreateMessage = () => {
    store.dispatch(addMessageCreator())
  }
  const onUpdateText = (text: string) => {
    store.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageText={newMessageText}
      onCreateMessage={onCreateMessage}
      onUpdateText={onUpdateText}
    />
  )
}

export default DialogsContainer
