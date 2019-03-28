import React from 'react'
import styled from 'styled-components'
import lozad from 'lozad'

class LazyImg extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.observer = lozad()
    this.observer.observe()
  }

  render() {
    let { ...props } = this.props

    return <RetImg {...props} />
  }
}

const TmpImg = ({ alt, className, src, height, width, ...props }) => (
  <picture
    {...props}
    data-alt={alt}
    className={className ? 'lozad ' + className : 'lozad'}
    data-iesrc={src}
  >
    <source type="image/webp" srcSet={src + '.webp'} />
    <source type={generateType(src)} srcSet={src} />
  </picture>
)

const generateType = src => {
  if (src.match(/\.gif/)) {
    return 'image/jpeg'
  } else if (src.match(/\.png/)) {
    return 'image/png'
  }
  return 'image/jpeg'
}

// props => props.height が参照しか取れずundefinedがキャッチできない。値が空のときautoにしたい。
const RetImg = styled(TmpImg)`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  display: block;
  min-height: 1rem;
  img {
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
  }
`

export { LazyImg }
