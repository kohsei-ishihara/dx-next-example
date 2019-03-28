import React from 'react'
import { Subscribe } from 'unstated'
import { CounterContainer } from '../containers/CounterContainer'

const OtherMain = () => {
  return (
    <main id="main" name="main" className="col-12">
      <article>article</article>
      <Subscribe to={[CounterContainer]}>
        {container => (
          <>
            <p>Counter: {container.state.count}</p>
            <button onClick={() => container.reset()}>reset</button>
            <button onClick={() => container.increaseBy(15)}>
              Increase By 15
            </button>
          </>
        )}
      </Subscribe>
    </main>
  )
}

export { OtherMain }
