!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?module.exports=l():"function"==typeof define&&define.amd?define(l):((e=e||self)["k-intl"]=e["k-intl"]||{},e["k-intl"].ru=l())}(this,function(){"use strict";return[{locale:"ru",pluralRuleFunction:function(e,l){var r=String(e).split("."),n=r[0],t=!r[1],o=n.slice(-1),u=n.slice(-2);return l?"other":t&&1==o&&11!=u?"one":t&&2<=o&&o<=4&&(u<12||14<u)?"few":t&&0==o||t&&5<=o&&o<=9||t&&11<=u&&u<=14?"many":"other"}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}]});
