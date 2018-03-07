'use babel'
import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <form>{ this.props.children }</form>
    )
  }
}
