import React, { Component } from 'react'
import format from './format'
import getDisplayName from './getDisplayName'

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
    if (!this.context.store
      || !this.context.store.getState()
      || !this.context.store.getState().locale) {
      throw new Error('/ HOC k-intl / locale is not readable. make sure that this one is available at the root of your redux store')
    }

    /* not change labels when the sub store local not change */
    if (this.context.store.getState().locale === this.locale) return
    this.locale = this.context.store.getState().locale

    this.setState(state => ({
      ...state,
      injectedProps: {
        labels: format(this.context.store.getState().locale)(config, nextProps || this.props),
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
