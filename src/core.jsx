import React, { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'
import { wrapDisplayName, getLocale } from './utils'
import format from './format'

export default config => WrappedComponent => class extends Component {
  static displayName = wrapDisplayName(WrappedComponent, 'Intl')

  static contextTypes = {
    store: () => null, // this is to avoid importing prop-types
  }

  constructor(props, context) {
    super(props, context)
    this.labels = {}
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
    const labels = format(locale)(
      config,
      nextProps || this.props,
    )
    /* not change labels when the formated labels is identical */
    if (shallowEqual(this.state.injectedProps.labels, this.labels)) return
    this.setState(state => ({
      ...state,
      injectedProps: { labels },
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
