import {connect} from 'react-redux'
import {IState, IUser} from '../../models'
import {followAC, setUsersAC, unfollowAC} from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state: IState) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
