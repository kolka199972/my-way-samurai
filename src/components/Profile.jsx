import React from 'react'
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
      <div>
        My Posts
        <div>New Post</div>
        <div className='posts'>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post1</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
