import * as React from 'react'
import { combineRules, createRenderer } from 'fela'
import { render } from 'fela-dom'
import { flattenDeep } from 'lodash'

export default class ClassRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.renderer = createRenderer()
  }

  componentDidMount() {
    render(this.renderer)
  }

  render() {
    const { children } = this.props

    const style = (rules) => {
      // A rule is a style declaration or a function that returns a style declaration.
      // Rules are either an array of rules, a single rule, or null.
      // Ensure rules are an array of functions to make them easier to combine.
      const rulesArr = flattenDeep([rules])
        .filter(Boolean)
        .map(rule => (typeof rule === 'function' ? rule : () => rule))
      const rule = combineRules(...rulesArr)
      return this.renderer.renderRule(rule)
    }

    return children(style)
  }
}