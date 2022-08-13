import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import {IAction, IState} from './models'

interface AppProps {
  state: IState
  dispatch: (action: IAction) => void
}

const App = ({state, dispatch}: AppProps) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar sidebar={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/profile'
            element={
              <Profile dispatch={dispatch} profilePage={state.profilePage} />
            }
          />
          <Route
            path='/dialogs/*'
            element={
              <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />
            }
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
