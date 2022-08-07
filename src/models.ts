export interface IState {
  profilePage: {
    posts: Array<{
      id: number
      message: string
      likesCount: number
    }>
    newPostText: string
  }
  dialogsPage: {
    dialogs: Array<{
      id: number
      name: string
    }>
    messages: Array<{
      id: number
      message: string
    }>
    newMessageText: string
  }
  sideBar: {
    friends: Array<{
      id: number
      name: string
    }>
  }
}
