import React from 'react'
import {IProfileUser} from '../../../models'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

interface ProfileInfoProps {
  profile: IProfileUser
  status: string
  setUserStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, setUserStatus}: ProfileInfoProps) => {
  if (!profile) return <Preloader />
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt='ava' />
        <ProfileStatus status={status} setUserStatus={setUserStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo
