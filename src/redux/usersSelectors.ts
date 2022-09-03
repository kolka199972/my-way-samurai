import {createSelector} from 'reselect'
import {IState, IUser} from '../models'

const getUsersSelector = (state: IState) => {
  return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users: IUser[]) =>
  users.filter((u) => true)
)

export const getCurrentPage = (state: IState) => {
  return state.usersPage.currentPage
}

export const getPageSize = (state: IState) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: IState) => {
  return state.usersPage.totalUsersCount
}

export const getIsFetching = (state: IState) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: IState) => {
  return state.usersPage.followingInProgress
}
