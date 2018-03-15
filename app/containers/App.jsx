import React from 'react'
import Routes from '../routes'
import classNames from 'classnames'
import extend from 'xtend'

import Back from '../components/Back'
import Error from '../components/helpers/Error'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previous: [],
      errors: []
    }
  }

  setPrevious(path) {
    this.setState({
      previous: this.state.previous + path
    })
  }

  handleErrors(errors) {
    this.setState({
      errors: errors
    })
  }

  render() {
    var hasErrors = this.state.errors.length > 0
    var errorClass = classNames('flash', 'errors', {
      visible: hasErrors
    })

    var errors = hasErrors ? this.state.errors.map((error, i) => {
      return <Error key={ i } header={ error.key } message={ error.message } />
    }) : null

    const children = React.Children.map(this.props.children, parent => {
      parent.props.children.map(child => {
        let props = extend(child.props, {
          handleErrors: this.handleErrors.bind(this)
        })
        return React.cloneElement(child, props)
      })
      return parent
    })[0]
    return (
      <div>
        <div className={ errorClass }>
          { errors }
        </div>
        <Back previous={ this.state.previous } />
        <div className="main">
          <div className="container">
            { children }
          </div>
        </div>
      </div>
    )
  }
}
