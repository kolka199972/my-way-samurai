import React from 'react'
import {IProfileUser} from '../../models'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profile: IProfileUser
  status: string
  setUserStatus: (status: string) => void
}

const Profile = ({profile, status, setUserStatus}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        setUserStatus={setUserStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
