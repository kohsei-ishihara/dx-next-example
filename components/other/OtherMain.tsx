import { connect } from 'react-redux'
import React from 'react'
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from 'cloudinary-react'

function OtherMainComponent(error, lastUpdate, light, placeholderData, title) {
  return (
    <main id="main" name="main" className="col-12">
      <article>article</article>
    </main>
  )
}

const OtherMain = connect(state => state)(OtherMainComponent)

export { OtherMain }
