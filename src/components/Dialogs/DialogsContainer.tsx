import {connect} from 'react-redux'
import {IState} from '../../models'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer'
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
      dispatch(addMessageAC())
    },
    onUpdateText: (text: string) => {
      dispatch(updateNewMessageTextAC(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
