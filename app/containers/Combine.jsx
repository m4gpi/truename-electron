import React from 'react'
import classNames from 'classnames'
import { assembleTrueName } from '../actions/truename'

import CombineForm from '../components/forms/CombineForm'
import Name from '../components/Name'

export default class Combine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trueName: '',
      pieces: []
    }
  }

  setPieces(pieces) {
    this.setState({ pieces: pieces })
  }

  revealName(event) {
    event.preventDefault()
    var trueName = assembleTrueName(this.state.pieces.map(piece => piece.value))
    this.setState({ trueName: trueName })
  }

  render () {
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var fullWidthClass = classNames("twelve", "columns")
    var trueName = this.state.trueName.length > 0 ? <Name content={ this.state.trueName } /> : null
    return (
      <div>
        <div className={ rowClass }>
          <div className={ fullWidthClass }>
            <h2>Reassemble a True Name</h2>
          </div>
        </div>
        <div className="row">
          <CombineForm
            setPieces={ this.setPieces.bind(this) }
            revealName={ this.revealName.bind(this) }
            handleErrors={ this.props.handlErrors }
          />
        </div>
        { trueName }
      </div>
    )
  }
}
