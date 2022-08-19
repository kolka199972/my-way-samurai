import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC
} from '../../redux/usersReducer'
import axios from 'axios'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

interface UsersContainerProps {
  onSetUsers: (users: IUser[]) => void
  onSetTotalUsersCount: (usersCount: number) => void
  onSetCurrentPage: (pageNumber: number) => void
  onUnfollow: (id: number) => void
  onFollow: (id: number) => void
  onToggleIsFetching: (isFetching: boolean) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  isFetching: boolean
}

class UsersContainer extends React.Component<UsersContainerProps, {}> {
  componentDidMount() {
    this.props.onToggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.onToggleIsFetching(false)
        this.props.onSetUsers(response.data.items)
        this.props.onSetTotalUsersCount(response.data.totalCount)
      })
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.onSetCurrentPage(pageNumber)
    this.props.onToggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.onToggleIsFetching(false)
        this.props.onSetUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onSetCurrentPage={this.setCurrentPage}
          onUnfollow={this.props.onUnfollow}
          onFollow={this.props.onFollow}
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
      dispatch(setTotalUsersCountAC(usersCount))
    },
    onToggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
