import React from 'react'
import classNames from 'classnames'

export default class Name extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var fullWidthClass = classNames("twelve", "columns")
    return (
      <div className={ rowClass }>
        <div className={ fullWidthClass }>
          <h1>{ this.props.content }</h1>
        </div>
      </div>
    )
  }
}
