import React from 'react'
import { Subscribe } from 'unstated'
import { ProductContainer } from './containers/ProductContainer'

const Page = () => {
  return (
    <Subscribe to={[ProductContainer]}>
      {container => {
        const { data, error, loading } = container.state
        if (!data && !error && !loading) {
          container.getData('https://jsonplaceholder.typicode.com/users')
          //container.getData(process.env.CEEMS_API_PRODUCTS)
        }
        return (
          <section>
            {data && (
              <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            )}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
          </section>
        )
      }}
    </Subscribe>
  )
}
export { Page }
