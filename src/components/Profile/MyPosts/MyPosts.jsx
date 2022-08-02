import React from 'react'
// import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className='posts'>
        <Post message='How are you?' countLikes='20' />
        <Post message="It's my first post" countLikes='25' />
      </div>
    </div>
  )
}

export default MyPosts
