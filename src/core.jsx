import React, { Component } from 'react'
import { shallowEqual, wrapDisplayName } from 'recompose'
import getLocale from './getLocale'
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
    /* not change labels when the sub store local not change */
    if (shallowEqual(labels, this.labels)) return
    this.labels = labels
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
