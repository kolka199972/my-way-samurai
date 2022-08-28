import {IProfilePage, IProfileUser} from './../models'
import {IAction} from '../models'
import {userAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    {id: 1, message: 'How are you?', likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 25},
    {id: 3, message: 'Visual Studio Code', likesCount: 24},
    {id: 4, message: 'WebStorm', likesCount: 42}
  ],
  newPostText: '',
  profile: {
    aboutMe: '',
    contacts: {},
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    photos: {
      large: '',
      small: ''
    },
    userId: Date.now()
  }
}

const profileReducer: (state: IProfilePage, action: IAction) => IProfilePage = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Date.now(),
        message: state.newPostText,
        likesCount: 42
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
}

export function addPostAC() {
  return {type: ADD_POST}
}

export function updateNewPostTextAC(text: string) {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export function setUserProfile(user: IProfileUser) {
  return {type: SET_USER_PROFILE, profile: user}
}

export const getUserProfile = (userId: number) => {
  return (dispatch: any) => {
    userAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data))
    })
  }
}

export default profileReducer
