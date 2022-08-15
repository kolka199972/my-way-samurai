import React from 'react'
import {
  addMessageCreator,
  updateNewMessageTextCreator
} from '../../redux/dialogsReducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: any) => {
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
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
