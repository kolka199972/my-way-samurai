export interface IPost {
  id: number
  message: string | undefined
  likesCount: number
}

export interface IDialog {
  id: number
  name: string
}

export interface IMessage {
  id: number
  message: string | undefined
}

export interface IFriend {
  id: number
  name: string
}

export interface IProfilePage {
  posts: IPost[]
  newPostText: string | undefined
}

export interface IDialogsPage {
  dialogs: IDialog[]
  messages: IMessage[]
  newMessageText: string | undefined
}

export interface ISidebar {
  friends: IFriend[]
}

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
  sidebar: ISidebar
}

export interface IAction {
  type: string
  newText?: string
}

export interface IStore {
  _state: IState
  getState: () => IState
  _callObserver: (state: IState) => void
  subscribe: (callback: (state: IState) => void) => void
  dispatch: (action: IAction) => void
}
