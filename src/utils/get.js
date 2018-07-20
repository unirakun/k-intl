const get = (data, path) => path.split('.').reduce(
  (curr, sub) => curr && curr[sub],
  data,
)

export default (data, path) => (typeof path === 'string' ? get(data, path) : data)
