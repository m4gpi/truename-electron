'use babel'
import React from 'react'
import Routes from '../routes'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/share'>Share</Link>
          </li>
        </ul>
        <Routes />
      </div>
    )
  }
}
