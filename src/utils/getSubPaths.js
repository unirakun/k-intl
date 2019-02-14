
const getKey = (path) => {
  const splitPath = path.split('.')
  return splitPath[splitPath.length - 1]
}

export const get = (data, path) => {
  if (typeof path !== 'string') return data

  return path.split('.').reduce(
    (curr, sub) => curr && curr[sub],
    data,
  )
}

export default (locale, paths, root) => {
  const subMessages = get(locale, paths)
  if (!subMessages || typeof subMessages === 'string') {
    return { [getKey(paths)]: paths }
  }

  return Object
    .keys(subMessages)
    .reduce(
      (acc, curr) => ({ ...acc, [curr]: `${root}.${curr}` }),
      {},
    )
}
