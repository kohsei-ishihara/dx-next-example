export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA2: 'LOAD_DATA2',
  LOAD_DATA2_SUCCESS: 'LOAD_DATA2_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  PAGE_NUMBER: 'PAGE_NUMBER'
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}

export function reset() {
  return { type: actionTypes.RESET }
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function loadData2() {
  return { type: actionTypes.LOAD_DATA2 }
}

export function loadData2Success(data) {
  return {
    type: actionTypes.LOAD_DATA2_SUCCESS,
    data
  }
}

export function startClock() {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}

export function setPageNumber(pageNumber) {
  return {
    type: actionTypes.PAGE_NUMBER,
    pageNumber: pageNumber
  }
}