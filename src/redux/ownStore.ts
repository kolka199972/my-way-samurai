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
    },
    usersPage: {
      users: [
        {
          id: 1,
          followed: true,
          photoUrl:
            'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
          fullName: 'Kirill',
          status: 'I am the best!',
          location: {
            country: 'Belarus',
            city: 'Minsk'
          }
        },
        {
          id: 2,
          followed: true,
          photoUrl:
            'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
          fullName: 'Rostik',
          status: 'I like money!',
          location: {
            country: 'Belarus',
            city: 'Minsk'
          }
        },
        {
          id: 3,
          followed: false,
          photoUrl:
            'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
          fullName: 'Ruslan',
          status: 'I am not the best!',
          location: {
            country: 'Belarus',
            city: 'Minsk'
          }
        },
        {
          id: 4,
          followed: true,
          photoUrl:
            'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
          fullName: 'Dmitriy',
          status: 'I am boss!',
          location: {
            country: 'Russia',
            city: 'Moscow'
          }
        },
        {
          id: 5,
          followed: false,
          photoUrl:
            'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
          fullName: 'Maks',
          status: 'I search the justice!',
          location: {
            country: 'Ukraine',
            city: 'Kiev'
          }
        }
      ]
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
