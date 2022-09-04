import {stopSubmit} from 'redux-form'
import {authAPI} from '../api/api'
import {IAction, IAuth, IAuthData} from '../models'

const SET_AUTH_USER_DATA = 'samurai/auth/SET_AUTH_USER_DATA'

const initialState = {
  userId: 0,
  email: '',
  login: '',
  isAuth: false
}

const authReducer: (state: IAuth, action: IAction) => IAuth = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        state,
        ...action.data
      }

    default:
      return state
  }
}

export const setAuthUserData = ({userId, email, login, isAuth}: IAuthData) => {
  return {type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}}
}

export const setAuthUser = () => {
  return async (dispatch: any) => {
    const data = await authAPI.me()
    if (data.resultCode !== 0) return
    const {id, email, login} = data.data
    dispatch(setAuthUserData({userId: id, email, login, isAuth: true}))
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
  return async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(setAuthUser())
    } else {
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: message}))
    }
  }
}

export const logout = () => {
  return async (dispatch: any) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData({userId: 0, email: '', login: '', isAuth: false})
      )
    }
  }
}

export default authReducer
