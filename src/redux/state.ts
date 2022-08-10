import {IState} from './../models'

let rerenderDOM = (state: IState) => {
  console.log(state)
}
// OOP
const state: IState = {
  profilePage: {
    posts: [
      {id: 1, message: 'How are you?', likesCount: 20},
      {id: 2, message: "It's my first post", likesCount: 25},
      {id: 3, message: 'Visual Studio Code', likesCount: 24},
      {id: 4, message: 'WebStorm', likesCount: 42}
    ],
    newPostText: ''
  },
  dialogsPage: {
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
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Julia'},
      {id: 2, name: 'Kirill'},
      {id: 3, name: 'Roma'}
    ]
  }
}

export const addPost = () => {
  const newPost = {
    id: Date.now(),
    message: state.profilePage.newPostText,
    likesCount: 42
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderDOM(state)
}

export const updateNewPostText = (text: string) => {
  state.profilePage.newPostText = text
  rerenderDOM(state)
}

export const addMessage = () => {
  const newMessage = {
    id: Date.now(),
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderDOM(state)
}

export const updateNewMessageText = (text: string) => {
  state.dialogsPage.newMessageText = text
  rerenderDOM(state)
}

export const subscribe = (callback: (state: IState) => void) => {
  rerenderDOM = callback
}

export default state
