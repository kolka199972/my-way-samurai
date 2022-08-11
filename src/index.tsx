import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import store from './redux/state'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {IState} from './models'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderDOM = (state: IState) => {
  root.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        onUpdateNewPostText={store.updateNewPostText.bind(store)}
        onAddPost={store.addPost.bind(store)}
        onAddMessage={store.addMessage.bind(store)}
        onUpdateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </BrowserRouter>
  )
}

rerenderDOM(store.getState())

store.subscribe(rerenderDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
