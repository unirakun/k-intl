import React, { Component } from 'react'
import { getDisplayName, getLocale } from './utils'
import format from './format'

export default config => WrappedComponent => class extends Component {
  static displayName = getDisplayName(WrappedComponent)

  static contextTypes = {
    store: () => null, // this is to avoid importing prop-types
  }

  constructor(props, context) {
    super(props, context)
    this.locale = {}
    this.state = {
      injectedProps: {},
    }
  }

  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(() => { this.format() })
    this.format()
  }

  componentWillReceiveProps(nextProps) {
    this.format(nextProps)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  format = (nextProps) => {
    /* take locale on `config.locale` reducer */
    const locale = getLocale(this.context)

    /* not change labels when the sub store local not change */
    if (locale === this.locale) return
    this.locale = locale

    this.setState(state => ({
      ...state,
      injectedProps: {
        labels: format(this.context.store.getState().config.locale)(
          config,
          nextProps || this.props,
        ),
      },
    }))
  }

  render() {
    return (
      <WrappedComponent
        /* this is parent props */
        {...this.props}
        /* this is injected props from hoc */
        {...this.state.injectedProps}
      />
    )
  }
}
