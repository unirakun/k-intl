import React, { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'
import { wrapDisplayName, getConfigs } from './utils'
import formatter from './formatter'

export default (path, getState) => WrappedComponent => class extends Component {
  static displayName = wrapDisplayName(WrappedComponent, 'Intl')

  static contextTypes = {
    store: () => null, // this is to avoid importing prop-types
  }

  constructor(props, context) {
    super(props, context)
    this.messages = {}
    this.state = {
      injectedProps: {},
    }
  }

  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(() => { this.inject() })
    this.inject()
  }

  componentWillReceiveProps(nextProps) {
    this.inject(nextProps)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  inject = (nextProps) => {
    /* take lang, locale and formats on `store` reducer */
    const { lang, locale, formats } = getConfigs(getState)(this.context)

    /* path can be a function, in which case we pass props to it */
    let innerPath = path
    if (typeof path === 'function') innerPath = path(nextProps || this.props)

    /* format messages */
    const messages = formatter(lang, locale, formats)(
      innerPath,
      nextProps || this.props,
    )
    /* not change messages when the formated messages is identical */
    if (shallowEqual(this.state.injectedProps.messages, messages)) return
    this.setState(state => ({
      ...state,
      injectedProps: { messages },
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
