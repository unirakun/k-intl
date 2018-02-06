export default {
  simple: {
    withoutParam: 'aucun paramètre',
    withOneParam: 'avec {one} paramètre',
    withTwoParam: 'avec {one} {two} paramètre',
  },
  plural: {
    simple: 'vous avez {param, plural, =0 {aucun paramètre.} =1 {one paramètre.} other {# paramètres.}}',
  },
  number: {
    withoutParam: 'aucun paramètre',
    withOneParam: 'avec {one, number} paramètre',
    withPercentParam: 'avec {one, number, percent} paramètre',
    withUSDFormat: 'avec {one, number, usd} paramètre',
  },
  select: {
    gender: '{ gender, select, male {Il} female {Elle} other {ça} } répondra sous peu.',
  },
}
