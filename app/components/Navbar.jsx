'use babel'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <Link onClick={ this.props.appendPath } to='/shard'>
          <div className='box'><h3>Shard</h3></div>
        </Link>
        <Link onClick={ this.props.appendPath } to='/revive'>
          <div className='box'><h3>Revive</h3></div>
        </Link>
      </div>
    )
  }
}
