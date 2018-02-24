'use babel'
import React from 'react'
import { isNumber, shardHorcrux } from '../actions/horcrux'
import Shard from './Shard'

export default class ShardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shardQuantity: null,
      quorum: null,
      soul: '',
      shards: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleShardQuantityChange = this.handleShardQuantityChange.bind(this)
    this.handleQuorumChange = this.handleQuorumChange.bind(this)
    this.handleSoulChange = this.handleSoulChange.bind(this)
  }

  readyToSubmit() {
    return (isNumber(this.state.shardQuantity) &&
      isNumber(this.state.quorum) &&
      this.state.soul.length > 0)
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

  handleSubmit(event) {
    var shards = shardHorcrux(this.state.soul, this.state.shardQuantity, this.state.quorum)
    this.setState({ shards: shards })
  }

  render() {
    const shards = this.state.shards.map((shard, index) => {
      return <Shard key={ index } content={ shard } />
    })
    return (
      <div>
        <h1>Shard</h1>
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
        </form>
        <div className="shards">
          { shards }
        </div>
      </div>
    )
  }
}
