'use babel'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

window.onload = function(){
  ReactDOM.render(
    (
      <HashRouter>
        <Routes />
      </HashRouter>
    ),
    document.getElementById('app')
  )
}
