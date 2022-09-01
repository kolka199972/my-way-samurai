import {connect} from 'react-redux'
import {compose} from 'redux'
// import {withAuthReducer} from '../../hoc/withAuthRedirect'
import {IState} from '../../models'
import {addMessageAC} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state: IState) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreateMessage: (newMessageText: string) => {
      dispatch(addMessageAC(newMessageText))
    }
  }
}

const DialogsContainer = compose(
  // withAuthReducer
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

export default DialogsContainer
