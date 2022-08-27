import React from 'react'
import {connect} from 'react-redux'
import {IAuth, IState} from '../../models'
import {setAuthUser} from '../../redux/authReducer'
import Header from './Header'

interface HeaderContainerProps {
  setAuthUser: () => void
  auth: IAuth
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
  componentDidMount() {
    this.props.setAuthUser()
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
  setAuthUser
}

export default connect(
  mapStateToProps,
  mapDispatchObjectToProps
)(HeaderContainer)
