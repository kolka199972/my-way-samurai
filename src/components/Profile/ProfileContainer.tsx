import React from 'react'
import {connect} from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {compose} from 'redux'
import {IProfileUser, IState} from '../../models'
import {
  getUserProfile,
  getUserStatus,
  savePhoto,
  setUserStatus
} from '../../redux/profileReducer'
import Profile from './Profile'
// import { withAuthReducer } from '../../hoc/withAuthRedirect'

interface ProfileContainerProps {
  getUserProfile: (userId: number) => void
  getUserStatus: (id: number) => void
  setUserStatus: (status: string) => void
  savePhoto: (photo: any) => void
  status: string
  profile: IProfileUser
  router: any
  isAuth: boolean
  authorizedUserId: number
  history: any
}

class ProfileContainer extends React.Component<ProfileContainerProps, {}> {
  refreshProfile = () => {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 2
      // userId = this.props.authorizedUserId
      // if (!userId) {
      //   this.props.history.push('/login')
      // }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(
    prevProps: Readonly<ProfileContainerProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
      />
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
  }
}

const mapDispatchObjectToProps = {
  getUserProfile,
  setUserStatus,
  getUserStatus,
  savePhoto
}

export default compose(
  withRouter,
  // withAuthReducer
  connect(mapStateToProps, mapDispatchObjectToProps)
)(ProfileContainer)

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{location, navigate, params}} />
  }

  return ComponentWithRouterProp
}
