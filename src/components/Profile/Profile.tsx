import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import s from './Profile.module.css'

interface ProfileProps {
  profilePage: {
    posts: Array<{
      id: number
      message: string
      likesCount: number
    }>
    newPostText: string
  }
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
