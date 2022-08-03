import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://www.buro247.ua/images/2017/09/neytiri-avatar-5824.jpg'
        alt='ava'
      />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
