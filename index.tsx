import React from 'react'
import { generate, Presentation } from 'jsx-presentation'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'

const config = {
  dryRun: false,
  outDir: 'results'
}

generate(<Presentation>
  <Slide1 />
  <Slide2 />
  <Slide3 />
</Presentation>, config)