import React from 'react'

export default class Error extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p>{ this.props.message }</p>
      </div>
    )
  }
}
