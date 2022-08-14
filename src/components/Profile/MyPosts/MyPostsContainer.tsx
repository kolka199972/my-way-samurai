import React from 'react'
import {
  addPostCreator,
  updateNewPostTextCreator
} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

interface MyPostsContainerProps {
  store: any
}

const MyPostsContainer = ({store}: MyPostsContainerProps) => {
  const profilePageState = store.getState().profilePage
  const onCreateNewPost = () => {
    store.dispatch(addPostCreator())
  }

  const onUpdateNewPostText = (text: string) => {
    store.dispatch(updateNewPostTextCreator(text))
  }

  return (
    <MyPosts
      posts={profilePageState.posts}
      newPostText={profilePageState.newPostText}
      onUpdateNewPostText={onUpdateNewPostText}
      onCreateNewPost={onCreateNewPost}
    />
  )
}

export default MyPostsContainer
