import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Store from './store'
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Home />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)
