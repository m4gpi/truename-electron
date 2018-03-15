import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './containers/App'
import Home from './containers/Home'
import Share from './containers/Share'
import Combine from './containers/Combine'
import About from './containers/About'

export default class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <App>
        <Switch>
          <Route exact path='/' component={ Home }  />
          <Route path='/share' component={ Share } />
          <Route path='/combine' component={ Combine } />
          <Route path='/about' component={ About } />
        </Switch>
      </App>
    )
  }
}
