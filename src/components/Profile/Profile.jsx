import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

const Profile = ({state, onAddPost}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts onAddPost={onAddPost} posts={state.posts} />
    </div>
  )
}

export default Profile
