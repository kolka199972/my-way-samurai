import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  store: any
}

const Profile = ({store}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  )
}

export default Profile
