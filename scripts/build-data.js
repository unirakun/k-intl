import * as fs from 'fs'
import * as p from 'path'
import { sync as mkdirpSync } from 'mkdirp'
import extractCLDRData from 'formatjs-extract-cldr-data'
import serialize from 'serialize-javascript'
import { rollup } from 'rollup'
import memory from 'rollup-plugin-memory'
import { uglify } from 'rollup-plugin-uglify'

const DEFAULT_LOCALE = 'en'
const DEFAULT_MAP = new Map()
const directoryData = 'locale-data/'

const cldrData = extractCLDRData({
  pluralRules: true,
  relativeFields: false, // disable relativeFields by default
})

const cldrDataByLocale = new Map(Object.keys(cldrData).map(locale => [locale, cldrData[locale]]))

const cldrDataByLang = [...cldrDataByLocale].reduce((map, [locale, data]) => {
  const [lang] = locale.split('-')
  const langData = map.get(lang) || []
  return map.set(lang, langData.concat(data))
}, DEFAULT_MAP)

const createDataModule = localeData => `
// GENERATED FILE
export default ${serialize(localeData)};
  `

const writeUMDFile = (filename, module) => {
  const lang = p.basename(filename, '.js')
  return rollup({
    input: filename,
    plugins: [
      memory({
        path: filename,
        contents: module,
      }),
      uglify(),
    ],
  })
    .then(bundle => bundle.write({
      file: filename,
      format: 'umd',
      name: `k-intl.${lang}`,
    }))
    .then(() => filename)
}

const writeFile = (filename, contents) => new Promise((resolve, reject) => {
  fs.writeFile(
    filename,
    contents,
    (err) => {
      if (err) reject(err)
      else resolve(p.resolve(filename))
    },
  )
})

// -----------------------------------------------------------------------------
const run = () => {
  if (fs.existsSync(directoryData)) return

  mkdirpSync(directoryData)

  const defaultData = createDataModule(cldrDataByLocale.get(DEFAULT_LOCALE))
  writeFile(`src/${DEFAULT_LOCALE}.js`, defaultData)

  const allData = createDataModule([...cldrDataByLocale.values()])
  writeUMDFile(`${directoryData}index.js`, allData)

  cldrDataByLang.forEach((data, lang) => {
    writeUMDFile(`${directoryData}${lang}.js`, createDataModule(data))
  })

  process.on('unhandledRejection', (reason) => { throw reason })
  // eslint-disable-next-line no-console
  console.log(`Writing locale data files to ${directoryData}...`)
}

run()
