import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {IPost} from '../../../models'
import {maxLengthCreator, required} from '../../../utils/validators'
import {Textarea} from '../../common/FormsControl/FormsControl'
import s from './MyPosts.module.css'
import Post from './Post/Post'

interface MyPostsProps {
  posts: IPost[]
  onCreateNewPost: (newPostText: string) => void
}

const maxLength20 = maxLengthCreator(20)

const MyPosts = ({posts, onCreateNewPost}: MyPostsProps) => {
  const createNewPost = (values: any) => {
    onCreateNewPost(values.newPostText)
  }

  const postsElements = posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <ProfileReduxNewPostForm onSubmit={createNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts

const ProfileNewPostForm = ({handleSubmit}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name='newPostText'
          placeholder='new post text...'
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const ProfileReduxNewPostForm = reduxForm({form: 'ProfileNewPostText'})(
  ProfileNewPostForm
)
