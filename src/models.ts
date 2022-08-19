export interface IPost {
  id: number
  message: string
  likesCount: number
}

export interface IDialog {
  id: number
  name: string
}

export interface IMessage {
  id: number
  message: string
}

export interface IFriend {
  id: number
  name: string
}

export interface IUser {
  id: number
  followed: boolean
  photoUrl: string
  name: string
  status: string
  location: {
    country: string
    city: string
  }
}

export interface IUsersPage {
  users: IUser[]
  currentPage: number
  pageSize: number
  totalUsersCount: number
}

export interface IProfilePage {
  posts: IPost[]
  newPostText: string
}

export interface IDialogsPage {
  dialogs: IDialog[]
  messages: IMessage[]
  newMessageText: string
}

export interface ISidebar {
  friends: IFriend[]
}

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
  sidebar: ISidebar
  usersPage: IUsersPage
}

export type IActionAddPost = {
  type: 'ADD_POST'
}

export type IActionUpdateNewPostText = {
  type: 'UPDATE_NEW_POST_TEXT'
  newText: string
}

export type IActionAddMessage = {
  type: 'ADD_MESSAGE'
}

export type IActionUpdateNewMessageText = {
  type: 'UPDATE_NEW_MESSAGE_TEXT'
  newText: string
}

export type IACtionFollow = {
  type: 'FOLLOW'
  userId: number
}

export type IACtionUnfollow = {
  type: 'UNFOLLOW'
  userId: number
}

export type IActionSetUsers = {
  type: 'SET_USERS'
  users: IUser[]
}

export type IActionSetCurrentPage = {
  type: 'SET_CURRENT_PAGE'
  currentPage: number
}

export type IActionSetTotalUsersCount = {
  type: 'SET_TOTAL_USERS_COUNT'
  totalUsersCount: number
}

export type IAction =
  | IActionAddPost
  | IActionUpdateNewPostText
  | IActionAddMessage
  | IActionUpdateNewMessageText
  | IACtionFollow
  | IACtionUnfollow
  | IActionSetUsers
  | IActionSetCurrentPage
  | IActionSetTotalUsersCount

export interface IStore {
  _state: IState
  getState: () => IState
  _callObserver: (state: IState) => void
  subscribe: (callback: (state: IState) => void) => void
  dispatch: (action: IAction) => void
}
