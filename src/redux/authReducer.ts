import {authAPI} from '../api/api'
import {IAction, IAuth, IAuthData} from '../models'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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
  return (dispatch: any) => {
    authAPI.me().then((data) => {
      if (data.resultCode !== 0) return
      const {id, email, login} = data.data
      dispatch(setAuthUserData({userId: id, email, login, isAuth: true}))
    })
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUser())
      }
    })
  }
}

export const logout = () => {
  return (dispatch: any) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setAuthUserData({userId: 0, email: '', login: '', isAuth: false})
        )
      }
    })
  }
}

export default authReducer
