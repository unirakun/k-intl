export const getLocale = (context) => {
  if (!context.store
    || !context.store.getState()
    || !context.store.getState().config
    || !context.store.getState().config.locale) {
    throw new Error('/ HOC k-intl / locale is not readable. make sure that this one is available at `config.local` on your redux store')
  }
  return context.store.getState().config.locale
}

export const getLang = (context) => {
  if (!context.store
    || !context.store.getState()
    || !context.store.getState().config
    || !context.store.getState().config.lang) {
    throw new Error('/ HOC k-intl / lang is not readable. make sure that this one is available at `config.lang` on your redux store')
  }
  return context.store.getState().config.lang
}

export const getFormats = (context) => {
  if (!context.store
    || !context.store.getState()
    || !context.store.getState().config
    || !context.store.getState().config.getFormats) {
    return {}
  }
  return context.store.getState().config.lang
}
