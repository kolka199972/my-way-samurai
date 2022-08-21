import React from 'react'
import {IProfileUser} from '../../models'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profile: IProfileUser
}

const Profile = ({profile}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
