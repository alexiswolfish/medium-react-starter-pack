import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { render } from 'fela-dom'

export default class StyleProvider extends Component {
  static propTypes = { renderer: PropTypes.object.isRequired }
  static childContextTypes = { renderer: PropTypes.object }

  getChildContext() {
    return { renderer: this.props.renderer }
  }

  componentDidMount() {
    const { renderer, ssrMode } = this.props
    if (!ssrMode) {
      render(renderer)
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}
