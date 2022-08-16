import {IAction, IDialogsPage} from '../models'

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
  dialogs: [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Kirill'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Sveta'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I am Lion'},
    {id: 3, message: 'My name'},
    {id: 4, message: 'Yo'}
  ],
  newMessageText: ''
}

const dialogsReducer: (state: IDialogsPage, action: IAction) => IDialogsPage = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: Date.now(),
        message: state.newMessageText
      }
      const copyState = {...state}
      copyState.messages = [...state.messages]
      copyState.messages.push(newMessage)
      copyState.newMessageText = ''
      return copyState
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      const copyState = {...state}
      copyState.newMessageText = action.newText
      return copyState
    }

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
