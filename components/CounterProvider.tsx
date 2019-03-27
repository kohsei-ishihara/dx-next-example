import React, { Component } from 'react'

const CounterContext = React.createContext()

class CounterProvider extends Component {
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

  increaseBy = (val) => {
    this.setState({
      count: this.state.count + val
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          reset: this.reset,
          increase: this.increase,
          decrease: this.decrease,
          increaseBy: this.increaseBy
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

const CounterConsumer = CounterContext.Consumer

export default CounterProvider
export { CounterConsumer }
