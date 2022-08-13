import {IStore} from './../models'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const store: IStore = {
  _state: {
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
  },
  _callObserver() {},
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === 'ADD_POST') {
      const newPost = {
        id: Date.now(),
        message: this._state.profilePage.newPostText,
        likesCount: 42
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callObserver(this._state)
    }

    if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callObserver(this._state)
    }

    if (action.type === 'ADD_MESSAGE') {
      const newMessage = {
        id: Date.now(),
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callObserver(this._state)
    }

    if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      this._state.dialogsPage.newMessageText = action.newText
      this._callObserver(this._state)
    }
  },
  subscribe(callback) {
    this._callObserver = callback
  }
}

export function addPostActionCreator() {
  return {type: ADD_POST}
}

export function updateNewPostTextActionCreator(text: string) {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export function addMessageActionCreator() {
  return {type: ADD_MESSAGE}
}

export function updateNewMessageTextActionCreator(text: string) {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default store
