import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { StyledButton } from '../StyledButton'
import { StyledButton2 } from '../StyledButton2'
import { Page } from '../Page'
import { Subscribe } from 'unstated'
import { CounterContainer } from '../containers/CounterContainer'

const IndexMain = ({ title, description }) => {
  return (
    <>
      <main id="main" className={'col-12'}>
        <article>
          <h1>
            {title}
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
              {container => (
                <>
                  <p>Counter: {container.state.count}</p>
                  <button onClick={() => container.increase()}>increase</button>
                  <button onClick={() => container.decrease()}>decrease</button>
                </>
              )}
            </Subscribe>
          </section>
          <Page />
        </article>
      </main>
      <script
        dangerouslySetInnerHTML={{ __html: `window.gtagPageview('/');` }}
      />
    </>
  )
}
export { IndexMain }
