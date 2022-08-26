import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {IState} from './models'
import './index.css'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderDOM = (state: IState) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

rerenderDOM(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderDOM(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// Redux-Thunk
