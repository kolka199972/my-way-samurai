import React from 'react'
import s from './Post.module.css'

interface PostProps {
  message: string | undefined
  likesCount: number
}

const Post = ({message, likesCount}: PostProps) => {
  return (
    <div className={s.item}>
      <img
        src='https://www.buro247.ua/images/2017/09/neytiri-avatar-5824.jpg'
        alt='ava'
      />
      {message}
      <div>
        <span>likes</span> {likesCount}
      </div>
    </div>
  )
}

export default Post
