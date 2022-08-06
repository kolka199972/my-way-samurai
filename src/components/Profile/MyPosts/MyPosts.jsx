import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({posts, onAddPost, onUpdateNewPostText, newPostText}) => {
  const newPostElement = React.createRef()

  const createNewPost = () => {
    onAddPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    onUpdateNewPostText(text)
  }

  const postsElements = posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={newPostText}
            ref={newPostElement}
          ></textarea>
        </div>
        <div>
          <button onClick={createNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
