import React from 'react'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {IState} from './models'
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import './App.css'

interface AppProps {
  initializeApp: () => void
  initialized: boolean
}

class App extends React.Component<AppProps, {}> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    initialized: state.app.initialized
  }
}

const mapObjectDispatchToProps = {
  initializeApp
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapObjectDispatchToProps)
)(App)

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{location, navigate, params}} />
  }

  return ComponentWithRouterProp
}
