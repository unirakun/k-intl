// eslint-disable-next-line import/no-unresolved, import/extensions
import defaultLocaleData from 'k-intl/locale-data/en'
import { get } from 'lodash'
import IntlMessageFormat from 'intl-messageformat'
import { addLocaleData } from './utils'

const defaultMessages = {}
const browserLanguage = window.navigator.language || window.navigator.browserLanguage
/* add default locale on startup, import on src folder */
addLocaleData(defaultLocaleData)

export const formatter = (...args) => new IntlMessageFormat(...args)

const formatMessage = (params, message = '', ...args) => {
  if (params) {
    try {
      return formatter(message, ...args).format(params)
    } catch (e) {
      console.warn('/HOC k-intl/', e.message) // eslint-disable-line no-console
    }
  }
  return message
}

const getKey = (path) => {
  const splitPath = path.split('.')
  return splitPath[splitPath.length - 1]
}

const getSubPaths = (locale, paths, config) => {
  const subMessages = get(locale, paths)

  if (!subMessages || typeof subMessages === 'string') {
    return { [getKey(paths)]: paths }
  }

  return Object
    .keys(subMessages)
    .reduce(
      (acc, curr) => ({ ...acc, [curr]: `${config}.${curr}` }),
      defaultMessages,
    )
}

export default
(lang = browserLanguage, locale, customFormats) =>
  (config = {}, componentProps = []) => {
    // in case of locale is not initialized
    if (!locale) return {}

    let paths = config
    if (typeof paths === 'string') paths = getSubPaths(locale, paths, config)
    return Object
      .keys(paths)
      .reduce((acc, curr) => {
        const message = get(locale, paths[curr])
        return { ...acc, [curr]: formatMessage(componentProps[curr], message, lang, customFormats) }
      }, defaultMessages)
  }
