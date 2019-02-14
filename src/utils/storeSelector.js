const defaultState = state => state.config

const factoryConfig = (getState = defaultState) => context => (field, mandatory = true) => {
  const state = getState(context.store.getState())

  if ((!state || !state[field]) && mandatory) {
    throw new Error(`/HOC k-intl/ ${field} is not readable. Make sure that this one is available at config.${field} on your redux store`)
  }
  return state[field]
}

export default getState => (context) => {
  const getConfig = factoryConfig(getState)(context)
  return {
    locale: getConfig('locale'),
    lang: getConfig('lang'),
    formats: getConfig('formats', false),
  }
}
