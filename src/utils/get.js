const get = (object, path, defaultVal) => {
  if (!object) return defaultVal

  const innerPath = Array.isArray(path)
    ? path
    : path.split('.').filter(i => i.length)
  if (!innerPath.length) return object

  return get(object[innerPath.shift()], innerPath, defaultVal)
}

export default get
