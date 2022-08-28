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
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export const setAuthUserData = ({userId, email, login}: IAuthData) => {
  return {type: SET_AUTH_USER_DATA, data: {userId, email, login}}
}

export const setAuthUser = () => {
  return (dispatch: any) => {
    authAPI.me().then((data) => {
      const {id, email, login} = data.data
      dispatch(setAuthUserData({userId: id, email, login}))
    })
  }
}

export default authReducer
