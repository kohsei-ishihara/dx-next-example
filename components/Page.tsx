import React from 'react'

const Page = ({ fetchData }) => {
  const { data, error, loading } = fetchData
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
}

export { Page }
