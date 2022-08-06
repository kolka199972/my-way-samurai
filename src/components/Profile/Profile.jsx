import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

const Profile = ({state, onAddPost, onUpdateNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={state.newPostText}
        onUpdateNewPostText={onUpdateNewPostText}
        onAddPost={onAddPost}
        posts={state.posts}
      />
    </div>
  )
}

export default Profile
