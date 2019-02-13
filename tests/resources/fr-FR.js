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
    withOneParam: 'avec {one} paramètre',
    withPercentParam: 'avec {one} paramètre',
    withUSDFormat: 'avec {one} paramètre',
  },
  select: {
    gender: '{ gender, select, male {Il} female {Elle} other {ça} } répondra sous peu.',
  },
}
