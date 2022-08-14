import {IAction, ISidebar} from './../models'

const initialState = {
  friends: [
    {id: 1, name: 'Julia'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Roma'}
  ]
}

const sidebarReducer: (state: ISidebar, action: IAction) => ISidebar = (
  state = initialState,
  action
) => {
  return state
}

export default sidebarReducer
