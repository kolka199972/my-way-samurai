import React, {Suspense} from 'react'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {IState} from './models'
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import './App.css'

const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
)
const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
)
const UsersContainer = React.lazy(
  () => import('./components/Users/UsersContainer')
)
const Login = React.lazy(() => import('./components/Login/Login'))
const Music = React.lazy(() => import('./components/Music/Music'))
const News = React.lazy(() => import('./components/News/News'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))

interface AppProps {
  initializeApp: () => void
  initialized: boolean
}

class App extends React.Component<AppProps, {}> {
  handleError = (promiseRejectionEvent: any) => {
    console.log(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.handleError)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleError)
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
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<ProfileContainer />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
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
