import React from 'react'
import {connect} from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {userAPI} from '../../api/api'
import {IProfileUser, IState} from '../../models'
import {setUserProfile} from '../../redux/profileReducer'
import Profile from './Profile'

interface ProfileContainerProps {
  setUserProfile: (user: IProfileUser) => void
  profile: IProfileUser
  router: any
}

class ProfileContainer extends React.Component<ProfileContainerProps, {}> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 2
    }
    userAPI.getUserProfile(userId).then((data) => {
      this.props.setUserProfile(data)
    })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profile: state.profilePage.profile
  }
}

const mapDispatchObjectToProps = {
  setUserProfile
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(withRouter(ProfileContainer))

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{location, navigate, params}} />
  }

  return ComponentWithRouterProp
}
