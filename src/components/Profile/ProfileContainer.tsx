import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {IProfileUser, IState} from '../../models'
import {setUserProfile} from '../../redux/profileReducer'
import Profile from './Profile'

interface ProfileContainerProps {
  setUserProfile: (user: IProfileUser) => void
  profile: IProfileUser
}

class ProfileContainer extends React.Component<ProfileContainerProps, {}> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
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
)(ProfileContainer)
