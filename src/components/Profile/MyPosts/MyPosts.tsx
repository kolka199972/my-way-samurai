import React, {RefObject} from 'react'
import {IAction, IPost} from '../../../models'
import {
  addPostCreator,
  updateNewPostTextCreator
} from '../../../redux/profileReducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'

interface MyPostsProps {
  posts: IPost[]
  newPostText: string | undefined
  dispatch: (action: IAction) => void
}

const MyPosts = ({posts, dispatch, newPostText}: MyPostsProps) => {
  const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

  const createNewPost = () => {
    dispatch(addPostCreator())
  }

  const onPostChange = () => {
    const text = newPostElement.current!.value
    dispatch(updateNewPostTextCreator(text))
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
