import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

const Profile = ({state}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={state.posts} />
    </div>
  )
}

export default Profile
