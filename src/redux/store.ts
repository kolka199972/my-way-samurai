// @ts-nocheck
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore
} from 'redux'
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)
// const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store
