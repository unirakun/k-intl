import { get } from 'lodash'
import IntlMessageFormat from 'intl-messageformat'
import defaultLocaleData from './en'
import { addLocaleData } from './utils'

const defaultLabel = {}
const browserLanguage = window.navigator.language || window.navigator.browserLanguage
/* add default locale on startup, import on src folder */
addLocaleData(defaultLocaleData)

export const formatter =
  (lang, label = '', customFormat) => new IntlMessageFormat(label, lang, customFormat)

export default (locale, lang = browserLanguage, customFormats) => (config, componentProps) =>
  Object
    .keys(config)
    .reduce((acc, curr) => {
      const label = get(locale, config[curr])
      if (label && componentProps && componentProps[curr]) {
        /* use formatJS to parse message */
        return {
          ...acc,
          [curr]: formatter(lang, label, customFormats).format(componentProps[curr]),
        }
      }
      return { ...acc, [curr]: label }
    }, defaultLabel)
