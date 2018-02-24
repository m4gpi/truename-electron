'use babel'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './containers/HomePage'
import ShardPage from './containers/ShardPage'
import RevivePage from './containers/RevivePage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shard' component={ ShardPage } />
        <Route path='/revive' component={ RevivePage } />
      </Switch>
    )
  }
}
