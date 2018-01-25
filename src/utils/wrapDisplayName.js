export default (Component, wrapperName) => (
  `${wrapperName || 'intl'} (${Component.displayName
  || Component.name
  || (Component.constructor && Component.constructor.name)
  || 'Unknown'})`
)
