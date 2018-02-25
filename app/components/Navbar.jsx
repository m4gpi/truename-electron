'use babel'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='/'>/</Link>
        </li>
        <li>
          <Link to='/shard'>Shard</Link>
        </li>
        <li>
          <Link to='/revive'>Revive</Link>
        </li>
      </ul>
    )
  }
}
