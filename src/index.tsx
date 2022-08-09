import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import state, {subscribe} from './redux/state'
import App from './App'
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText
} from './redux/state'
import {BrowserRouter} from 'react-router-dom'
import {IState} from './models'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderDOM = (state: IState) => {
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

rerenderDOM(state)

subscribe(rerenderDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
