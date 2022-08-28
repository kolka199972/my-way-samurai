import {Navigate} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import {IState} from '../models'

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthReducer = (Component: any) => {
  class RedirectComponent extends React.Component<{
    isAuth: boolean
  }> {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login' />

      return <Component {...this.props} />
    }
  }

  const ConnectedComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedComponent
}
