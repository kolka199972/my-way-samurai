import React from 'react'
import {IProfileUser} from '../../../models'
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/img/user.png'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

interface ProfileInfoProps {
  profile: IProfileUser
  status: string
  isOwner: boolean
  setUserStatus: (status: string) => void
  savePhoto: (photo: any) => void
}

const ProfileInfo = ({
  profile,
  isOwner,
  status,
  savePhoto,
  setUserStatus
}: ProfileInfoProps) => {
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
    </div>
  )
}

export default ProfileInfo
