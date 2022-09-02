import React from 'react'
import {connect} from 'react-redux'
import {IAuth, IState} from '../../models'
import {logout, setAuthUser} from '../../redux/authReducer'
import Header from './Header'

interface HeaderContainerProps {
  setAuthUser: () => void
  auth: IAuth
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
  componentDidMount() {
    this.props.setAuthUser()
  }

  render() {
    return <Header logout={this.props.logout} auth={this.props.auth} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    auth: state.auth
  }
}

const mapDispatchObjectToProps = {
  setAuthUser,
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(HeaderContainer)
