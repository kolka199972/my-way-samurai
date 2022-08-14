import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import {IAction, IState} from './models'

interface AppProps {
  store: any
  state: IState
  dispatch: (action: IAction) => void
}

const App = ({state, dispatch, store}: AppProps) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar sidebar={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile store={store} />} />
          <Route
            path='/dialogs/*'
            element={<DialogsContainer store={store} />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
