import React from 'react'
import { range } from 'lodash'
import classNames from 'classnames'

import Select from '../helpers/Select'
import Form from '../helpers/Form'
import Input from '../helpers/Input'
import Button from '../helpers/Button'

export default class CombineForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceQuantity: 0,
      pieces: []
    }
  }

  handleInput(event) {
    var id = event.target.id
    var value = event.target.value

    var piece = this.state.pieces.filter(piece => piece.id === id)[0]

    let pieces
    if (piece) {
      pieces = this.state.pieces.map((piece, i) => {
        if (piece.id == event.target.id) piece.value = event.target.value
        return piece
      })
    } else {
      pieces = this.state.pieces
      pieces.push({ id: event.target.id, value: event.target.value })
    }
    this.setState({ pieces: pieces })
    this.props.setPieces(pieces)
  }

  handleChange(event) {
    var nextState = this.state
    var key = event.target.name
    nextState[key] = event.target.value
    this.setState(nextState)
  }

  render () {
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var pieces = range(0, this.state.pieceQuantity).map((num, i) => {
      return (
        <div className={ rowClass }>
          <div key={ i } className="twelve columns">
            <Input
              id={ num }
              key={ i }
              name={ name }
              type="text"
              onChange={ this.handleInput.bind(this) }
            />
          </div>
        </div>
      )
    })
    var button = pieces.length > 0 ? <Button onClick={ this.props.revealName } label="Reveal" /> : null
    return (
      <Form>
        <div className={ rowClass }>
          <div className="twelve columns">
            <Select
              name="pieceQuantity"
              range={ range(0, 10) }
              onChange={ this.handleChange.bind(this) }
              label="Pieces"
            />
          </div>
        </div>
        { pieces }
        { button }
      </Form>
    )
  }
}
