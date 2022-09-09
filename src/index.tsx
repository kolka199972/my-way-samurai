import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {IState} from './models'
import {Provider} from 'react-redux'
import './index.css'

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

reportWebVitals()
