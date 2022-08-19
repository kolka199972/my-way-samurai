import {IAction, IUser, IUsersPage} from './../models'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState: IUsersPage = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0
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
        users: [...action.users]
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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

export const setCurrentPageAC = (pageNumber: number) => {
  return {type: SET_CURRENT_PAGE, currentPage: pageNumber}
}

export const setTotalUsersCount = (usersCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount}
}

export default usersReducer
