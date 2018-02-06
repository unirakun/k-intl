import IntlMessageFormat from 'intl-messageformat'

export default function (data) {
  const localeDatas = [].concat(data)

  localeDatas.forEach((localeData) => {
    // eslint-disable-next-line no-underscore-dangle
    if (localeData && localeData.locale) IntlMessageFormat.__addLocaleData(localeData)
  })
}
