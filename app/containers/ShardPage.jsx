'use babel'
import React from 'react'
import { isNumber, splitTrueName } from '../actions/truename'
import Piece from '../components/Piece'
import Form from '../components/helpers/Form'
import Input from '../components/helpers/Input'
import Button from '../components/helpers/Button'

export default class PiecePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceQuantity: null,
      quorum: null,
      trueName: '',
      pieces: [],
      frozen: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.freezeTrueName = this.freezeTrueName.bind(this)
  }

  validateForm(state) {
    return (isNumber(state.pieceQuantity) &&
      isNumber(state.quorum) &&
      state.trueName.length > 0)
  }

  readyToSubmit(state) {
    return this.validateForm(state) && !state.frozen
  }

  freezeTrueName(event) {
    event.preventDefault()
    var nextState = this.state
    nextState['frozen'] = !nextState.frozen
    this.setState(nextState)
    if (this.readyToSubmit(nextState)) this.splitTrueName(nextState)
  }

  splitTrueName(state) {
    var pieces = splitTrueName(state.trueName, state.pieceQuantity, state.quorum)
    this.setState({ pieces: pieces })
  }

  handleChange(event) {
    var nextState = this.state
    var key = event.target.name
    nextState[key] = event.target.value
    this.setState(nextState)
    if (this.readyToSubmit(nextState)) this.splitTrueName(nextState)
  }

  render() {
    const pieces = this.state.pieces.map((piece, index) => {
      return <Piece key={ index } content={ piece } />
    })
    const frozen = this.state.frozen ? <h3>Frozen</h3> : ''
    return (
      <div>
        <p>Split your True Name into pieces and give them out to your allies</p>
        <Form>
          <Input name="pieceQuantity" type="number" onChange={ this.handleChange } label="How many pieces of your True Name?" />
          <Input name="quorum" type="number" onChange={ this.handleChange } label="Pieces required to reassemble" />
          <Input name="trueName" type="text" onChange={ this.handleChange } label="Your True Name..." />
          <Button onClick={ this.freezeTrueName } label="Freeze" />
        </Form>
        { frozen }
        <div className="pieces">
          { pieces }
        </div>
      </div>
    )
  }
}
