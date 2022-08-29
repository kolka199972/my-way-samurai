import {IStore} from '../models'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'

const store: IStore = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'How are you?', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: 'Visual Studio Code', likesCount: 24},
        {id: 4, message: 'WebStorm', likesCount: 42}
      ],
      newPostText: '',
      profile: {
        aboutMe: '',
        contacts: {},
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
          large: '',
          small: ''
        },
        userId: Date.now()
      },
      status: ''
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
    },
    usersPage: {
      users: [],
      totalUsersCount: 0,
      pageSize: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: []
    },
    auth: {
      userId: 0,
      email: '',
      login: '',
      isAuth: false
    }
  },
  _callObserver() {},
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callObserver(this._state)
  },
  subscribe(callback) {
    this._callObserver = callback
  }
}

export default store
