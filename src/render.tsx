import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText
} from './redux/state'
import {BrowserRouter} from 'react-router-dom'
import {IState} from './models'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const rerenderDOM = (state: IState) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        onUpdateNewPostText={updateNewPostText}
        onAddPost={addPost}
        onAddMessage={addMessage}
        onUpdateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>
  )
}
