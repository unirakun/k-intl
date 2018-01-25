export default (context) => {
  if (!context.store
    || !context.store.getState()
    || !context.store.getState().config
    || !context.store.getState().config.locale) {
    throw new Error('/ HOC k-intl / locale is not readable. make sure that this one is available at `config.local` on your redux store')
  }
  return context.store.getState().config.locale
}
