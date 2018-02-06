/* eslint-env jest */
import wrapDisplayName from './wrapDisplayName'

const wrapperName = 'wrapper'

describe('utils/wrapDisplayName', () => {
  it(`should print a displayName with custom name : ${wrapperName}`, () => {
    expect({
      'Component.displayName': wrapDisplayName({ displayName: 'Component.displayName' }, wrapperName),
      'Component.name': wrapDisplayName({ name: 'Component.name' }, wrapperName),
      'Component.constructor.name': wrapDisplayName({ constructor: { name: 'Component.constructor.name' } }, wrapperName),
      Unknown: wrapDisplayName({ constructor: {} }, wrapperName),
    }).toMatchSnapshot()
  })
  it('should print a displayName', () => {
    expect({
      'Component.displayName': wrapDisplayName({ displayName: 'Component.displayName' }),
      'Component.name': wrapDisplayName({ name: 'Component.name' }),
      'Component.constructor.name': wrapDisplayName({ constructor: { name: 'Component.constructor.name' } }),
      Unknown: wrapDisplayName({ constructor: {} }),
    }).toMatchSnapshot()
  })
})
