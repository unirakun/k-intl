import IntlMessageFormat from 'intl-messageformat'

export default function (data = []) {
  const locales = Array.isArray(data) ? data : [data]

  locales.forEach((localeData) => {
    // eslint-disable-next-line no-underscore-dangle
    if (localeData && localeData.locale) IntlMessageFormat.__addLocaleData(localeData)
  })
}
