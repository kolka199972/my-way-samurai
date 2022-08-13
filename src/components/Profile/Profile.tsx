import React from 'react'
import {IAction, IProfilePage} from '../../models'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profilePage: IProfilePage
  dispatch: (action: IAction) => void
}

const Profile = ({profilePage, dispatch}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
        posts={profilePage.posts}
      />
    </div>
  )
}

export default Profile
