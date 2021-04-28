import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Store from './store'
import Router from './router'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)
