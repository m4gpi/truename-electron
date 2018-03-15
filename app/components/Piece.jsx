import React from 'react'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <h4>{ this.props.content }</h4>
    )
  }
}
