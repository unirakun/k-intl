const getConfig = (field, mandatory = true) => (context) => {
  const config = context.store
  && context.store.getState()
  && context.store.getState().config

  if ((!config || !config[field]) && mandatory) {
    throw new Error(`/ HOC k-intl / ${field} is not readable. Make sure that this one is available at config.${field} on your redux store`)
  }
  return config[field]
}

export const getLocale = getConfig('locale')
export const getLang = getConfig('lang')
export const getFormats = getConfig('formats', false)
