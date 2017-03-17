import React, { Component, PropTypes } from 'react'
import Header from '../components/Hello';

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children, } = this.props
    return (
      <div>
        <Header />

        {children}
      </div>
    )
  }
}

export default App
