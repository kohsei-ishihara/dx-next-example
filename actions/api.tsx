import fetch from 'isomorphic-unfetch'

export function users() {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .catch(error => {
      error
    })
}
