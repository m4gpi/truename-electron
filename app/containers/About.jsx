import React from 'react'
import classNames from 'classnames'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var fullWidthClass = classNames("twelve", "columns", "padded")
    return (
      <div className={ rowClass }>
        <div className={ fullWidthClass }>
          <p>
            Secrets can be used to split a secret text into shares to be distributed to friends.
          </p>
          <p>
            When all friends agree, the shares can be combined to retrieve the original secret text,
            for instance to give consensual access to a lost pin, a password, a list of passwords,
            a private document or a key to an encrypted volume.
          </p>
          <p>
            This tool is a simple free and open source offline wrapper for secret sharing.
          </p>
        </div>
      </div>
    )
  }
}
