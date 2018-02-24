'use babel'
import React from 'react'

export default class Shard extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <p>{ this.props.content }</p>
    )
  }
}
