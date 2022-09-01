import {connect} from 'react-redux'
import {IState} from '../../../models'
import {addPostAC} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state: IState) => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreateNewPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
