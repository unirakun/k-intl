// eslint-disable-next-line import/no-unresolved, import/extensions
import IntlMessageFormat from 'intl-messageformat'
import { get, getSubPaths } from './utils'

const formatMessage = (message = '', ...args) => (values) => {
  if (values) {
    try {
      return new IntlMessageFormat(message, ...args).format(values)
    } catch (e) {
      return message
    }
  }
  return message
}

const browserLanguage = window.navigator.language || window.navigator.browserLanguage

export default (lang = browserLanguage, locale, formats) => (rootPath = '', values = {}) => {
  // in case of locale is not initialized
  if (!locale) return {}

  let paths = rootPath
  if (typeof paths === 'string') paths = getSubPaths(locale, paths, rootPath)
  return Object
    .keys(paths)
    .reduce((acc, curr) => {
      const message = get(locale, paths[curr]) || ''
      return { ...acc, [curr]: formatMessage(message, lang, formats)(values[curr]) }
    }, {})
}
