import {connect} from 'react-redux'
import {IState} from '../../../models'
import {
  addPostCreator,
  updateNewPostTextCreator
} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state: IState) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUpdateNewPostText: (text: string) => {
      dispatch(updateNewPostTextCreator(text))
    },
    onCreateNewPost: () => {
      dispatch(addPostCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
