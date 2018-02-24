'use babel'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage'
import SharePage from './containers/SharePage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/share' component={ SharePage } />
      </Switch>
    )
  }
}
