import {IAction, IApp} from '../models'
import {setAuthUser} from './authReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
  initialized: false
}

const appReducer: (state: IApp, action: IAction) => IApp = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(setAuthUser())
    promise.then(() => dispatch(initializedSuccess()))
  }
}

export default appReducer
