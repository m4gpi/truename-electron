'use babel'
import React from 'react'
import { reviveFromShards } from '../actions/horcrux'

export default class RevivePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      soul: null,
      shards: []
    }
    this.buildShardInput = this.buildShardInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleShardChange = this.handleShardChange.bind(this)
    this.removeShardInput = this.removeShardInput.bind(this)
  }

  handleShardChange(event) {
    var value = event.target.value
    var id = event.target.parentElement.getAttribute('id')
    var shards = this.state.shards.map(shard => {
      if (shard['id'] == id) shard['value'] = value
      return shard
    })
    this.setState({ shards: shards })
  }

  buildShardInput(event) {
    event.preventDefault()
    var shards = this.state.shards
    shards.push({ id: shards.length + 2, value: '' })
    shards = shards.map((shard, index) => { shard['id'] = index; return shard })
    this.setState({ shards: shards })
  }

  removeShardInput(event) {
    event.preventDefault()
    var id = event.target.parentElement.getAttribute('id')
    var shards = this.state.shards.filter(shard => shard.id != id)
    this.setState({ shards: shards })
  }

  handleSubmit(event) {
    event.preventDefault()
    var soul = reviveFromShards(this.state.shards.map(shard => shard.value))
    this.setState({ soul: soul })
    console.log(soul)
  }

  render () {
    const shards = this.state.shards.map((shard, index) => {
      return (
        <div id={ shard.id } key={ index } className="shard">
          <label htmlFor='shard'>Shard: </label>
          <input onChange={ this.handleShardChange } type="text" name="shard" />
          <button onClick={ this.removeShardInput }>Remove</button>
        </div>
      )
    })
    const soul = this.state.soul ? <div>{ this.state.soul }</div> : null
    return (
      <div>
        <h1>Revive</h1>
        <form>
          <div>
            <button onClick={ this.buildShardInput }>Add</button>
          </div>
          <div className="shards">
            { shards }
          </div>
          <button onClick={ this.handleSubmit }>Reclaim your soul...</button>
        </form>
        { soul }
      </div>
    )
  }
}
