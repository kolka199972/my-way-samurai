import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow
} from '../../redux/usersReducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

interface UsersContainerProps {
  setCurrentPage: (pageNumber: number) => void
  unfollow: (id: number) => void
  follow: (id: number) => void
  getUsers: (pageSize: number, currentPage: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  isFetching: boolean
  followingInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersContainerProps, {}> {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(this.props.pageSize, pageNumber)
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
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const mapDispatchObjectToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(UsersContainer)
