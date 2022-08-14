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

export type IAction =
  | IActionAddPost
  | IActionUpdateNewPostText
  | IActionAddMessage
  | IActionUpdateNewMessageText

export interface IStore {
  _state: IState
  getState: () => IState
  _callObserver: (state: IState) => void
  subscribe: (callback: (state: IState) => void) => void
  dispatch: (action: IAction) => void
}
