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

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderDOM = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          onUpdateNewPostText={updateNewPostText}
          onAddPost={addPost}
          onAddMessage={addMessage}
          onUpdateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}
