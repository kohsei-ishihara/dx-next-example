import React from 'react'
import { Container } from 'unstated'

class CounterContainer extends Container {
  state = {
    count: 0
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  increaseBy = val => {
    this.setState({
      count: this.state.count + val
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
}

export { CounterContainer }
