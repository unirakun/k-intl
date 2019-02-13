/* eslint-env jest */
import format, { formatter } from '../src/format'
import { addLocaleData } from '../src/utils'
import localDataFR from '../locale-data/fr'
import en from './resources/en-GB'
import fr from './resources/fr-FR'

global.console = { warn: jest.fn() }

const customFormats = {
  number: {
    usd: { style: 'currency', currency: 'USD' },
  },
}

const keyValueResources = (lang, f) => ({
  language: formatter('', lang).resolvedOptions(),
  'simple.withoutParam': f({ test: 'simple.withoutParam' }),
  'simple.withOneParam.noParams': f({ test: 'simple.withOneParam' }, { test: {} }),
  'simple.withOneParam.noParams2': f({ test: 'simple.withOneParam' }),
  'simple.withOneParam.noParams3': f({ test: 'simple.withOneParam' }, { test: { two: 'TWO' } }),
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
  'string.simple': f('simple'),
  'string.simple.withoutParam': f('simple.withoutParam'),
  'string.simple.withOneParam': f('simple.withOneParam', { withOneParam: { one: 'ONE' } }),
  'string.simple.all.one': f('simple', { withOneParam: { one: 'ONE' } }),
  'string.simple.all.two': f('simple', { withTwoParam: { one: 'ONE', two: 'TWO' } }),
  'string.simple.all.one.two': f('simple', { withTwoParam: { one: 'ONE', two: 'TWO' }, withOneParam: { one: 'ONE' } }),
  'string.noExist': f('noExist'),
  'string.path.noExist': f('no.exist'),
  'number.noExist': f('number.exist'),
  'number.noExist.withOneParam': f({ test: 'number.noExist' }, { test: { one: 1 } }),
})

describe('src/format', () => {
  addLocaleData(localDataFR)

  it('should format message with EN Locale', () => {
    expect(keyValueResources('EN', format('EN', en, customFormats))).toMatchSnapshot()
  })

  it('should format message with FR Locale', () => {
    expect(keyValueResources('FR', format('FR', fr))).toMatchSnapshot()
  })

  it('should log warning when formatting params are not present', () => {
    expect(console.warn).toHaveBeenCalledTimes(4) // eslint-disable-line no-console
  })
})
