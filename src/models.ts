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

export interface IProfileUser {
  aboutMe: string
  contacts: object
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: {
    large: string
    small: string
  }
  userId: number
}

export interface IUsersPage {
  users: IUser[]
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
}

export interface IProfilePage {
  posts: IPost[]
  profile: IProfileUser
  status: string
}

export interface IDialogsPage {
  dialogs: IDialog[]
  messages: IMessage[]
}

export interface ISidebar {
  friends: IFriend[]
}

export interface IAuth {
  userId: number
  email: string
  login: string
  isAuth: boolean
}

export interface IAuthData {
  userId: number
  login: string
  email: string
  isAuth: boolean
}

export interface IApp {
  initialized: boolean
}

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
  sidebar: ISidebar
  usersPage: IUsersPage
  auth: IAuth
  app: IApp
}

export type IActionAddPost = {
  type: 'ADD_POST'
  newPostText: string
}

export type IActionAddMessage = {
  type: 'ADD_MESSAGE'
  newMessageText: string
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

export type IActionToggleIsFetchin = {
  type: 'TOGGLE_IS_FETCHING'
  isFetching: boolean
}

export type IActionSetUserProfile = {
  type: 'SET_USER_PROFILE'
  profile: IProfileUser
}

export type IActionSetAuthUserData = {
  type: 'SET_AUTH_USER_DATA'
  data: IAuthData
}

export type IActionToggleFollowingInProgress = {
  type: 'TOGGLE_FOLLOWING_IN_PROGRESS'
  followingInProgress: boolean
  userId: number
}

export type IActionSetStatus = {
  type: 'SET_STATUS'
  status: string
}

export type IActionInitializedSuccess = {
  type: 'SET_INITIALIZED'
}

export type IAction =
  | IActionAddPost
  | IActionAddMessage
  | IACtionFollow
  | IACtionUnfollow
  | IActionSetUsers
  | IActionSetCurrentPage
  | IActionSetTotalUsersCount
  | IActionToggleIsFetchin
  | IActionSetUserProfile
  | IActionSetAuthUserData
  | IActionToggleFollowingInProgress
  | IActionSetStatus
  | IActionInitializedSuccess

export interface IStore {
  _state: IState
  getState: () => IState
  _callObserver: (state: IState) => void
  subscribe: (callback: (state: IState) => void) => void
  dispatch: (action: IAction) => void
}
