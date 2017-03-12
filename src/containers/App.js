import React, { Component, PropTypes } from 'react'

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children, } = this.props
    return (
      <div>
        <h1>Hello whirled</h1>

        {children}
      </div>
    )
  }
}

export default App
