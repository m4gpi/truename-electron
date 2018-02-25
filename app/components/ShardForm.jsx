'use babel'
import React from 'react'
import { isNumber } from '../actions/horcrux'

export default class Shard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shardQuantity: null,
      quorum: null,
      soul: '',

    }

    this.handleShardQuantityChange = this.handleShardQuantityChange.bind(this)
    this.handleQuorumChange = this.handleQuorumChange.bind(this)
    this.handleSoulChange = this.handleSoulChange.bind(this)
    this.freezeSoul = this.freezeSoul.bind(this)
  }

  validateForm() {
    return (isNumber(this.state.shardQuantity) &&
      isNumber(this.state.quorum) &&
      this.state.soul.length > 0)
  }

  readyToSubmit() {
    return this.validateForm() && !this.state.frozen
  }

  freezeSoul(event) {
    event.preventDefault()
    this.setState({frozen: !this.state.frozen})
    if (this.validateForm()) this.handleSubmit(event)
  }

  handleShardQuantityChange(event) {
    var value = event.target.value
    if (isNumber(value)) this.setState({ shardQuantity: value })
    if (this.readyToSubmit()) this.handleSubmit(event)
  }

  handleQuorumChange(event) {
    var value = event.target.value
    if (isNumber(value)) this.setState({ quorum: value })
    if (this.readyToSubmit()) this.handleSubmit(event)
  }

  handleSoulChange(event) {
    this.setState({ soul: event.target.value })
    if (this.readyToSubmit()) this.handleSubmit(event)
  }
  render () {
    return (
        <form>
          <div>
            <label htmlFor="shardQuantity">How many shards of your soul?</label>
            <input onChange={ this.handleShardQuantityChange } type="number" name="shardQuantity"/>
          </div>
          <div>
            <label htmlFor="quorum">Pieces required to revive?</label>
            <input onChange={ this.handleQuorumChange } type="number" name="quorum"/>
          </div>
          <div>
            <label htmlFor="soul">Your soul...</label>
            <input onChange={ this.handleSoulChange } type="text" name="soul" required/>
          </div>
          <button onClick={ this.freezeSoul }>Freeze</button>
          { frozen }
        </form>
    )
  }
}
