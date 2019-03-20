import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import {
  actionTypes,
  failure,
  loadDataSuccess,
  loadData2Success,
  tickClock
} from '../actions/actions'
import fetch from 'isomorphic-unfetch'

es6promise.polyfill()

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 1000)
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch(process.env.CEEMS_API_PRODUCTS)
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadData2Saga() {
  try {
    const pageNumber = yield take('PAGE_NUMBER')
    const res = yield fetch(`http://localhost:3001/api/products/${pageNumber}`)
    const data = yield res.json()
    yield put(loadData2Success(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* runLoadDataSaga() {
  yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
}

function* runLoadData2Saga() {
  yield takeLatest(actionTypes.LOAD_DATA2, loadData2Saga)
}

function* rootSaga() {
  yield all([call(runClockSaga), call(runLoadDataSaga), call(runLoadData2Saga)])
}

export default rootSaga
