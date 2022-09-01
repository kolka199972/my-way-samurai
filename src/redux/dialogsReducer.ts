import {IAction, IDialogsPage} from '../models'

const ADD_MESSAGE = 'ADD_MESSAGE'

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
  ]
}

const dialogsReducer: (state: IDialogsPage, action: IAction) => IDialogsPage = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: Date.now(),
        message: action.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    }

    default:
      return state
  }
}

export default dialogsReducer

export function addMessageAC(newMessageText: string) {
  return {type: ADD_MESSAGE, newMessageText}
}
