'use babel'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Back extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var route = this.props.previous.slice(-1)[0] || { path: '/' }
    return (
      <div className='backBar'>
        <Link to={ route.path }>
          { '<<--' }
          <i className="fa fa-arrow-left fa-lg"></i>
        </Link>
      </div>
    )
  }
}
