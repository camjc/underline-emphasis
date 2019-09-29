import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>underline-emphasis Demo</h1>
      <Example>Foo Bar Baz</Example>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
