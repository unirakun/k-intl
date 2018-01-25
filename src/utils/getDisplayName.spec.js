/* eslint-env jest */
import getDisplayName from './getDisplayName'

describe('react/getDisplayName', () => {
  it('should print a displayName', () => {
    expect({
      'Component.displayName': getDisplayName({ displayName: 'Component.displayName' }),
      'Component.name': getDisplayName({ name: 'Component.name' }),
      'Component.constructor.name': getDisplayName({ constructor: { name: 'Component.constructor.name' } }),
      Unknown: getDisplayName({ constructor: {} }),
    }).toMatchSnapshot()
  })
})
