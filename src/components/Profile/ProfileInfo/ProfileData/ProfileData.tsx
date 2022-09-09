import React from 'react'
import {IProfileUser} from '../../../../models'
import s from './ProfileData.module.css'

interface ProfileDataProps {
  profile: IProfileUser
  isOwner: boolean
  setEditMode: (b: boolean) => void
}

interface ContactProps {
  contactTitle: string
  contactValue: string
}

const ProfileData = ({profile, isOwner, setEditMode}: ProfileDataProps) => {
  return (
    <div>
      {isOwner && <button onClick={() => setEditMode(true)}>Edit</button>}
      <div>
        <b>Full Name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob}
      </div>
      <div>{profile.lookingForAJob && profile.lookingForAJobDescription}</div>
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{' '}
        {Object.keys(profile.contacts).map((c: string) => (
          <Contact
            key={c}
            contactTitle={c}
            contactValue={profile.contacts[c]}
          />
        ))}
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}: ContactProps) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b> {contactValue}
    </div>
  )
}

export default ProfileData
