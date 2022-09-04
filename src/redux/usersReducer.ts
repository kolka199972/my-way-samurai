import {userAPI} from '../api/api'
import {updateObjectInArray} from '../utils/helpers'
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
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
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
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await userAPI.getUsers(pageSize, currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingInProgress(true, userId))

  const data = await apiMethod
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(toggleFollowingInProgress(false, userId))
}

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollowUser(userId),
      unfollowSucces
    )
  }
}

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.followUser(userId),
      followSucces
    )
  }
}

export default usersReducer
