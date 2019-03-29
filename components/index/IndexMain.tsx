import React, {Component} from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { StyledButton } from '../StyledButton'
import { StyledButton2 } from '../StyledButton2'
import { Page } from '../Page'
import { Subscribe } from 'unstated'
import { CounterContainer } from '../containers/CounterContainer'
import { IndexContainer } from '../containers/IndexContainer'

import Link from 'next/link'

class PageInit extends Component {
  componentDidMount() {
    this.props.indexContainer.setPage(this.props.page)
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

const IndexMain = ({ page, title, description, fetchData }) => {
  return (
    <Subscribe to={[IndexContainer]}>
      {indexContainer => (
        <>
          <PageInit indexContainer={indexContainer} page={page} />
          <main id="main" className={'col-12'}>
            <article>
              <h1>
                {title} | {indexContainer.state.page} | {page}
                <br />
                h1
                <FA icon={['fas', 'home']} fixedWidth />
                <FA icon={['far', 'home']} fixedWidth />
                <FA icon={['fal', 'home']} fixedWidth />
                <FA icon={['fab', 'apple']} size="2x" fixedWidth />
              </h1>

              <section>
                {description}
                <h2>
                  h2
                  <FA icon={['fas', 'home']} fixedWidth />
                  <FA icon={['far', 'home']} fixedWidth />
                  <FA icon={['fal', 'home']} fixedWidth />
                  <FA icon={['fab', 'apple']} size="2x" fixedWidth />
                </h2>
              </section>
              <section>
                <StyledButton color={'red'}>カスタマイズボタン</StyledButton>
                <StyledButton2 color={'red'}>カスタマイズボタン</StyledButton2>
              </section>
              <section>
                <Subscribe to={[CounterContainer]}>
                  {counterContainer => (
                    <>
                      <p>Counter: {counterContainer.state.count}</p>
                      <button onClick={() => counterContainer.increase()}>
                        increase
                      </button>
                      <button onClick={() => counterContainer.decrease()}>
                        decrease
                      </button>
                    </>
                  )}
                </Subscribe>
              </section>
              <section>
                <Link href="/other">
                  <a>Other Page</a>
                </Link>
                <button onClick={() => indexContainer.setPage(2)}>
                  page 2
                </button>
              </section>
              <Page fetchData={fetchData} />
            </article>
          </main>
          <script
            dangerouslySetInnerHTML={{ __html: `window.gtagPageview('/');` }}
          />
        </>
      )}
    </Subscribe>
  )
}

export { IndexMain }
