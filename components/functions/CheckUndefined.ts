export default function CheckUndefined(value) {
  if (typeof value === 'undefined') {
    return false
  } else {
    return value
  }
}
