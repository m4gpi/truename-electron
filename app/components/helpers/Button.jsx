import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var classes = this.props.classNames || "button button-primary"
    return (
      <button className={ classes } onClick={ this.props.onClick }>{ this.props.label }</button>
    )
  }
}
