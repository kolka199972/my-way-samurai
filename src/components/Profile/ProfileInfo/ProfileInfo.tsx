import React, {useState} from 'react'
import {IProfileUser} from '../../../models'
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/img/user.png'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileData from './ProfileData/ProfileData'
import ProfileDataForm from './ProfileData/ProfileDataForm'

interface ProfileInfoProps {
  profile: IProfileUser
  status: string
  isOwner: boolean
  setUserStatus: (status: string) => void
  savePhoto: (photo: any) => void
  saveProfile: any
}

const ProfileInfo = ({
  profile,
  isOwner,
  status,
  savePhoto,
  saveProfile,
  setUserStatus
}: ProfileInfoProps) => {
  const [editMode, setEditMode] = useState(false)

  const handleSubmit = (profile: any) => {
    saveProfile(profile).then(() => setEditMode(false))
  }

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  if (!profile) return <Preloader />
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          className={s.mainPhoto}
          src={profile.photos.large || userPhoto}
          alt='ava'
        />
        {isOwner && <input type='file' onChange={handleChange} />}
        <ProfileStatus propsStatus={status} setUserStatus={setUserStatus} />
      </div>
      {editMode ? (
        <ProfileDataForm initialValues={profile} onSubmit={handleSubmit} />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          setEditMode={setEditMode}
        />
      )}
    </div>
  )
}

export default ProfileInfo
