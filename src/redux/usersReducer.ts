import {userAPI} from '../api/api'
import {IAction, IUser, IUsersPage} from './../models'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState: IUsersPage = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: []
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)]
      }

    default:
      return state
  }
}

export const followSucces = (userId: number) => {
  return {type: FOLLOW, userId}
}

export const unfollowSucces = (userId: number) => {
  return {type: UNFOLLOW, userId}
}

export const setUsers = (users: IUser[]) => {
  return {type: SET_USERS, users}
}

export const setCurrentPage = (pageNumber: number) => {
  return {type: SET_CURRENT_PAGE, currentPage: pageNumber}
}

export const setTotalUsersCount = (usersCount: number) => {
  return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount}
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const toggleFollowingInProgress = (
  followingInProgress: boolean,
  userId: number
) => {
  return {type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId}
}

export const requestUsers = (pageSize: number, currentPage: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    userAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    userAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSucces(userId))
      }
    })
    dispatch(toggleFollowingInProgress(false, userId))
  }
}

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    userAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSucces(userId))
      }
    })
    dispatch(toggleFollowingInProgress(false, userId))
  }
}

export default usersReducer
