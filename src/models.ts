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

export interface IStore {
  _state: IState
  getState: () => IState
  _callObserver: (state: IState) => void
  addPost: () => void
  updateNewPostText: (text: string) => void
  addMessage: () => void
  updateNewMessageText: (text: string) => void
  subscribe: (callback: (state: IState) => void) => void
}
