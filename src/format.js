import { get, template } from 'lodash'

const interpolate = /{{([\s\S]+?)}}/g
const defaultLabel = {}

export default locale => (config, componentProps) =>
  Object
    .keys(config)
    .reduce((acc, curr) => {
      const label = get(locale, config[curr])
      if (componentProps && componentProps[curr]) {
        return { ...acc, [curr]: template(label, { interpolate })(componentProps[curr]) }
      }
      return { ...acc, [curr]: label }
    }, defaultLabel)
