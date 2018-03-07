'use babel'
import React from 'react'
import Routes from '../routes'
import Back from '../components/Back'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previous: []
    }
  }

  setPrevious(path) {
    this.setState({
      previous: path
    })
  }

  render() {
    return (
      <div>
        <Back previous={ this.state.previous } />
        <div className="appContainer">
          <div className="container">
            <Routes />
          </div>
        </div>
      </div>
    )
  }
}
