import {connect} from 'react-redux'
import {IState} from '../../../models'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer'
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
      dispatch(updateNewPostTextAC(text))
    },
    onCreateNewPost: () => {
      dispatch(addPostAC())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
