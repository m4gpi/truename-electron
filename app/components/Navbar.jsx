import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="four columns">
          <Link onClick={ this.props.appendPath } to='/share'>
            <div className='box relative'>
              <h3 className="center">Share</h3>
            </div>
          </Link>
        </div>
        <div className="four columns">
          <Link onClick={ this.props.appendPath } to='/combine'>
            <div className='box relative'>
              <h3 className="center">Combine</h3>
            </div>
          </Link>
        </div>
        <div className="four columns">
          <Link onClick={ this.props.appendPath } to='/about'>
            <div className='box relative'>
              <h3 className="center">About</h3>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
