export default Component => `Intl(${
  Component.displayName
  || Component.name
  || (Component.constructor && Component.constructor.name)
  || 'Unknown'
})`
