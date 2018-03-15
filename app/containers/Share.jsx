import React from 'react'
import { isNumber, splitTrueName } from '../actions/truename'
import Piece from '../components/Piece'
import ShareForm from '../components/forms/ShareForm'
import classNames from 'classnames'

export default class Share extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieces: [],
      frozen: false
    }
  } 

  showPieces(pieces) {
    this.setState({
      pieces: pieces
    })
  }

  handleFreeze(event) {
    event.preventDefault()
    this.setState({
      frozen: !this.state.frozen
    })
  }

  render() {
    var hasPieces = this.state.pieces.length > 0

    var pieces = this.state.pieces.map((piece, index) => {
      return <Piece key={ index } content={ piece } />
    })
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var piecesClass = classNames("pieces", {
      "padded": hasPieces
    })
    var fullWidthClass = classNames("twelve", "columns")
    return (
      <div>
        <div className={ rowClass }>
          <div className={ fullWidthClass }>
            <h2>Split your True Name into pieces</h2>
          </div>
        </div>
        <div className={ rowClass }>
          <ShareForm
            showPieces={ this.showPieces.bind(this) }
            frozen={ this.state.frozen }
            handleFreeze={ this.handleFreeze.bind(this) }
            handleErrors={ this.props.handlErrors }
          />
        </div>
        <div className={ rowClass }>
          <div className={ fullWidthClass }>
            <div className={ piecesClass }>
              { pieces }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
