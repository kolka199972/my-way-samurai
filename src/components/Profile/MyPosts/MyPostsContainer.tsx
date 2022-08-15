import React from 'react'
import {
  addPostCreator,
  updateNewPostTextCreator
} from '../../../redux/profileReducer'
import StoreContext from '../../../storeContext'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: any) => {
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
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
