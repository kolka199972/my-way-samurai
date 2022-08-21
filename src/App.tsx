import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
