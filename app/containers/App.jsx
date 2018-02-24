'use babel'
import React from 'react'
import Routes from '../routes'
import Navbar from './Navbar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}
