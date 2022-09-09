import React from 'react'
import {IProfileUser} from '../../models'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profile: IProfileUser
  status: string
  isOwner: boolean
  setUserStatus: (status: string) => void
  savePhoto: (photo: any) => void
  saveProfile: (profile: any) => void
}

const Profile = ({
  profile,
  isOwner,
  status,
  savePhoto,
  saveProfile,
  setUserStatus
}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo
        saveProfile={saveProfile}
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        setUserStatus={setUserStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
