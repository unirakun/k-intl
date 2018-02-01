import IntlMessageFormat from 'intl-messageformat'

/* eslint no-underscore-dangle: 0 */
export default function (data = []) {
  const locales = Array.isArray(data) ? data : [data]

  locales.forEach((localeData) => {
    if (localeData && localeData.locale) IntlMessageFormat.__addLocaleData(localeData)
  })
}
