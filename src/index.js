import React, { PureComponent } from 'react'
import window from 'global/window'

export default WrappedComponent => {
  return class ScrollTopOnMount extends PureComponent {
    componentDidMount () {
      window.scrollTo(0, 0)
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}
