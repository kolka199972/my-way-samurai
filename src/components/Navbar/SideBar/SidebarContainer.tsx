import {connect} from 'react-redux'
import {IState} from '../../../models'
import Sidebar from './Sidebar'

const mapStateToProps = (state: IState) => {
  return {
    friends: state.sidebar.friends
  }
}

const mapDispatchToProps = () => {
  return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
