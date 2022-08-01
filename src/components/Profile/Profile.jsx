import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src='https://www.w3schools.com/css/img_5terre_wide.jpg'
          alt='img'
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
