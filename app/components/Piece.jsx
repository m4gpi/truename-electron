'use babel'
import React from 'react'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <p>{ this.props.content }</p>
    )
  }
}
