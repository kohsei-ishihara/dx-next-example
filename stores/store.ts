import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { exampleInitialState } from '../reducers/reducer'
import rootSaga from '../sagas/saga'

import createSagaMonitor from '@clarketm/saga-monitor'

// configuration
const config = {
  level: 'log',
  effectTrigger: true,
  effectResolve: true,
  actionDispatch: true
}
const sagaMiddleware = createSagaMiddleware()
//{  sagaMonitor: createSagaMonitor(config) }

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState = exampleInitialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
