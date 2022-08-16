import {connect} from 'react-redux'
import {IState} from '../../models'
import {
  addMessageCreator,
  updateNewMessageTextCreator
} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state: IState) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreateMessage: () => {
      dispatch(addMessageCreator())
    },
    onUpdateText: (text: string) => {
      dispatch(updateNewMessageTextCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
