import {IProfilePage, IProfileUser} from './../models'
import {IAction} from '../models'
import {profileAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
    {id: 1, message: 'How are you?', likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 25},
    {id: 3, message: 'Visual Studio Code', likesCount: 24},
    {id: 4, message: 'WebStorm', likesCount: 42}
  ],
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
  },
  status: ''
}

const profileReducer: (state: IProfilePage, action: IAction) => IProfilePage = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Date.now(),
        message: action.newPostText,
        likesCount: 42
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId)
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }

    default:
      return state
  }
}

export function addPostAC(newPostText: string) {
  return {type: ADD_POST, newPostText}
}

export function deletePostAc(postId: number) {
  return {type: DELETE_POST, postId}
}

export function setUserProfile(user: IProfileUser) {
  return {type: SET_USER_PROFILE, profile: user}
}

export function setStatus(status: string) {
  return {type: SET_STATUS, status}
}

export function savePhotoSuccess(photos: any) {
  return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const getUserProfile = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
  }
}

export const getUserStatus = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(data))
  }
}

export const setUserStatus = (status: string) => {
  return async (dispatch: any) => {
    const data = await profileAPI.setUserStatus(status)
    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    } else {
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('ProfileData', {_error: message}))
      return Promise.reject(message)
    }
  }
}

export const savePhoto = (photo: any) => {
  return async (dispatch: any) => {
    const data = await profileAPI.savePhoto(photo)
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess)
    }
  }
}

export const saveProfile = (profile: any) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    }
  }
}

export default profileReducer
