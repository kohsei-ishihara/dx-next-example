const checkUndefined = value => {
  if (typeof value === 'undefined') {
    return false
  } else {
    return value
  }
}

export { checkUndefined }
