export default {
  simple: {
    withoutParam: 'no parameter',
    withOneParam: 'with {one} parameter',
    withTwoParam: 'with {one} {two} parameter',
  },
  plural: {
    simple: 'You have {param, plural, =0 {no parameter.} =1 {one parameter.} other {# parameters.}}',
  },
  number: {
    withoutParam: 'no parameter',
    withOneParam: 'with {one, number} parameter',
    withPercentParam: 'with {one, number, percent} parameter',
    withUSDFormat: 'with {one, number, usd} parameter',
  },
  select: {
    gender: '{ gender, select, male {He} female {She} other {They} } will respond shortly.',
  },
}
