/* eslint-env jest */
import format, { formatter } from '../src/format'
import { addLocaleData } from '../src/utils'
import localDataFR from '../locale-data/fr'
import en from './resources/en-GB'
import fr from './resources/fr-FR'

const customFormats = {
  number: {
    usd: { style: 'currency', currency: 'USD' },
  },
}

const keyValueResources = (lang, f) => ({
  language: formatter('', lang).resolvedOptions(),
  'simple.withoutParam': f({ test: 'simple.withoutParam' }),
  'simple.withOneParam': f({ test: 'simple.withOneParam' }, { test: { one: 'ONE' } }),
  'simple.withTwoParam': f({ test: 'simple.withTwoParam' }, { test: { one: 'ONE', two: 'TWO' } }),
  'plural.simple.noparam': f({ test: 'plural.simple' }),
  'plural.simple.zero': f({ test: 'plural.simple' }, { test: { param: 0 } }),
  'plural.simple.one': f({ test: 'plural.simple' }, { test: { param: 1 } }),
  'plural.simple.two': f({ test: 'plural.simple' }, { test: { param: 2 } }),
  'plural.simple.thousand': f({ test: 'plural.simple' }, { test: { param: 1000 } }),
  'number.withoutParam': f({ test: 'number.withoutParam' }),
  'number.withOneParam': f({ test: 'number.withOneParam' }, { test: { one: 1 } }),
  'number.withOneParam.thousand': f({ test: 'number.withOneParam' }, { test: { one: 1000 } }),
  'number.withPercentParam': f({ test: 'number.withPercentParam' }, { test: { one: 0.5 } }),
  'number.withUSDFormat': f({ test: 'number.withUSDFormat' }, { test: { one: 1234 } }),
  'select.gender.male': f({ test: 'select.gender' }, { test: { gender: 'male' } }),
  'select.gender.female': f({ test: 'select.gender' }, { test: { gender: 'female' } }),
  'select.gender.shemale': f({ test: 'select.gender' }, { test: { gender: 'shemale' } }),
})

const tester = (lang, locale) =>
  it(`should format message with ${lang} Locale`, () => {
    expect(keyValueResources(lang, format(lang, locale, customFormats))).toMatchSnapshot()
  })

describe('src/format', () => {
  addLocaleData(localDataFR)
  tester('EN', en)
  tester('FR', fr)
})
