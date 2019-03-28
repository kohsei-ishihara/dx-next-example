import React from 'react'
import { Container } from 'unstated'
import fetch from 'isomorphic-unfetch'

class ProductContainer extends Container {
  state = {
    data: null,
    error: null,
    loading: false
  }

  async getData(url) {
    await this.setState({ loading: true })

    try {
      const data = await fetch(url).then(r => r.json())
      await this.setState({ data, loading: false })
    } catch (error) {
      await this.setState({ error, loading: false })
    }
  }
}

export { ProductContainer }
