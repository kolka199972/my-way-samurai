import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'How are you?', likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 25}
  ]

  const postsElements = postsData.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
