import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from '../../redux/usersReducer'
import axios from 'axios'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

interface UsersContainerProps {
  setUsers: (users: IUser[]) => void
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (pageNumber: number) => void
  unfollow: (id: number) => void
  follow: (id: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  isFetching: boolean
}

class UsersContainer extends React.Component<UsersContainerProps, {}> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
        {withCredentials: true}
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {withCredentials: true}
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
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
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchObjectToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(UsersContainer)
