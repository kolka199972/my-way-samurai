import React from 'react'
import {IProfileUser} from '../../../models'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

interface ProfileInfoProps {
  profile: IProfileUser
}

const ProfileInfo = ({profile}: ProfileInfoProps) => {
  if (!profile) return <Preloader />
  return (
    <div>
      <div>
        <img
          src='https://www.w3schools.com/css/img_5terre_wide.jpg'
          alt='img'
        ></img>
      </div>
      <img src={profile.photos.large} alt='ava' />
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
