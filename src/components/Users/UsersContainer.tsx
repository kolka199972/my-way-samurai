import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCount,
  setUsersAC,
  unfollowAC
} from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state: IState) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFollow: (userId: number) => {
      dispatch(followAC(userId))
    },
    onUnfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    onSetUsers: (users: IUser[]) => {
      dispatch(setUsersAC(users))
    },
    onSetCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    onSetTotalUsersCount: (usersCount: number) => {
      dispatch(setTotalUsersCount(usersCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
