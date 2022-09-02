import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {
  follow,
  requestUsers,
  setCurrentPage,
  unfollow
} from '../../redux/usersReducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {compose} from 'redux'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/usersSelectors'
// import { withAuthReducer } from '../../hoc/withAuthRedirect'

interface UsersContainerProps {
  setCurrentPage: (pageNumber: number) => void
  unfollow: (id: number) => void
  follow: (id: number) => void
  requestUsers: (pageSize: number, currentPage: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  isFetching: boolean
  followingInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersContainerProps, {}> {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage)
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(this.props.pageSize, pageNumber)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onSetCurrentPage={this.setCurrentPage}
          onUnfollow={this.props.unfollow}
          onFollow={this.props.follow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

const mapDispatchObjectToProps = {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers
}

export default compose(
  // withAuthReducer
  connect(mapStateToProps, mapDispatchObjectToProps)
)(UsersContainer)
