import {IAction, IDialogsPage} from '../models'

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer: (state: IDialogsPage, action: IAction) => IDialogsPage = (
  state,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: Date.now(),
        message: state.newMessageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state

    default:
      return state
  }
}

export default dialogsReducer

export function addMessageCreator() {
  return {type: ADD_MESSAGE}
}

export function updateNewMessageTextCreator(text: string) {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}
