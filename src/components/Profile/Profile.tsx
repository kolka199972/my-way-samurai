import React from 'react'
import {IProfilePage} from '../../models'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profilePage: IProfilePage
  onAddPost: () => void
  onUpdateNewPostText: (val: string) => void
}

const Profile = ({
  profilePage,
  onAddPost,
  onUpdateNewPostText
}: ProfileProps) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={profilePage.newPostText}
        onUpdateNewPostText={onUpdateNewPostText}
        onAddPost={onAddPost}
        posts={profilePage.posts}
      />
    </div>
  )
}

export default Profile
