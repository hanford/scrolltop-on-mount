import React, {Component} from 'react'
import { render } from 'react-dom'

import withScrollTopHoc from '../../src'

class Demo extends Component {
  state = {
    renderScrollTopComponent: false
  }

  render () {
    return (
      <div style={{height: 4000}}>
        <h1>scrolltop-on-mount Demo</h1>

        <div style={{position: 'fixed', display: 'flex', flexDirection: 'column'}}>
          <div>renderScrollTopComponent: {this.state.renderScrollTopComponent.toString()}</div>
          <br />
          <button onClick={() => this.setState({ renderScrollTopComponent: !this.state.renderScrollTopComponent })}>render scrollTop</button>
        </div>
        {this.state.renderScrollTopComponent ? <TopScroll /> : null}
      </div>
    )
  }
}

const RenderScroll = props => (
  <div />
)

const TopScroll = withScrollTopHoc(RenderScroll)

render(<Demo />, document.querySelector('#demo'))
