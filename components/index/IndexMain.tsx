import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { StyledButton } from '../StyledButton'
import { StyledButton2 } from '../StyledButton2'
import { Page } from '../Page'

class IndexMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <main id="main" className={'col-12'}>
          <article>
            <h1>
              {this.props.title}
              <br />
              h1
              <FA icon={['fas', 'home']} fixedWidth />
              <FA icon={['far', 'home']} fixedWidth />
              <FA icon={['fal', 'home']} fixedWidth />
              <FA icon={['fab', 'apple']} size="2x" fixedWidth />
            </h1>

            <section>
              {this.props.description}
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

            <Page
              title={this.props.title}
              linkTo="/other"
              NavigateTo="Other Page"
            />
          </article>
        </main>
        <script
          dangerouslySetInnerHTML={{ __html: `window.gtagPageview('/');` }}
        />
      </>
    )
  }
}
export { IndexMain }
