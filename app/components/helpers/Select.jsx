import React from 'react'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var options = this.props.range.map((item, i) => {
      return <option key={ i } value={item}>{ item }</option>
    })
    return (
      <div>
        <label htmlFor={ this.props.name }>{ this.props.label }</label>
        <select disabled={ this.props.disabled } name={ this.props.name } onChange={ this.props.onChange }>
          { options }
        </select>
      </div>
    )
  }
}
