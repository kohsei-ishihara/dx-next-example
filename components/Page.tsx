import { connect } from 'react-redux'
import React from 'react'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        {this.props.placeholderData && (
          <pre>
            <code>
              {JSON.stringify(this.props.placeholderData.data, null, 2)}
            </code>
          </pre>
        )}
        {this.props.error && (
          <p style={{ color: 'red' }}>Error: {this.props.error.message}</p>
        )}
      </section>
    )
  }
}

export default connect(state => state)(Page)
