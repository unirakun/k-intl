import { get } from 'lodash'
import IntlMessageFormat from 'intl-messageformat'
import defaultLocaleData from './en'
import { addLocaleData } from './utils'

const defaultMessages = {}
const browserLanguage = window.navigator.language || window.navigator.browserLanguage
/* add default locale on startup, import on src folder */
addLocaleData(defaultLocaleData)

export const formatter = (...args) => new IntlMessageFormat(...args)

export default (lang = browserLanguage, locale, customFormats) => (config, componentProps) =>
  Object
    .keys(config)
    .reduce((acc, curr) => {
      const message = get(locale, config[curr])
      if (message && componentProps && componentProps[curr]) {
        return {
          ...acc,
          [curr]: formatter(message, lang, customFormats).format(componentProps[curr]),
        }
      }
      return { ...acc, [curr]: message }
    }, defaultMessages)
