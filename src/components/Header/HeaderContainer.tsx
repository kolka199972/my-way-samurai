import React from 'react'
import {connect} from 'react-redux'
import {IAuth, IState} from '../../models'
import {logout} from '../../redux/authReducer'
import Header from './Header'

interface HeaderContainerProps {
  auth: IAuth
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
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
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(HeaderContainer)
