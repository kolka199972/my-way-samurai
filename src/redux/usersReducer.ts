import {IAction, IUser, IUsersPage} from './../models'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: []
}

const usersReducer: (state: IUsersPage, action: IAction) => IUsersPage = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.userId === u.id) {
            return {
              ...u,
              followed: true
            }
          }
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.userId === u.id) {
            return {
              ...u,
              followed: false
            }
          }
          return u
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }

    default:
      return state
  }
}

export const followAC = (userId: number) => {
  return {type: FOLLOW, userId}
}

export const unfollowAC = (userId: number) => {
  return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users: IUser[]) => {
  return {type: SET_USERS, users}
}

export default usersReducer
