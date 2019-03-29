import { Container } from 'unstated'

class IndexContainer extends Container {
  state = {
    page: null
  }

  setPage = val => {
    this.setState({
      page: val
    })
  }
}

export { IndexContainer }
