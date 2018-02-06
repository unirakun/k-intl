import React, { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'
import { wrapDisplayName, getLocale, getLang, getFormats } from './utils'
import format from './format'

export default config => WrappedComponent => class extends Component {
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
    /* take locale on `config.lang` reducer */
    const lang = getLang(this.context)
    /* take locale on `config.locale` reducer */
    const locale = getLocale(this.context)
    /* take locale on `config.formats` reducer */
    const formats = getFormats(this.context)
    const messages = format(lang, locale, formats)(
      config,
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
