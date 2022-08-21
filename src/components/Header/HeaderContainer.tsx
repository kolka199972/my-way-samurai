import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {IAuth, IAuthData, IState} from '../../models'
import {setAuthUserData} from '../../redux/authReducer'
import Header from './Header'

interface HeaderContainerProps {
  setAuthUserData: (data: IAuthData) => void
  auth: IAuth
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {
        const {id, email, login} = response.data.data
        this.props.setAuthUserData({userId: id, email, login})
      })
  }

  render() {
    return <Header auth={this.props.auth} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    auth: state.auth
  }
}

const mapDispatchObjectToProps = {
  setAuthUserData
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(HeaderContainer)
