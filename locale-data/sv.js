!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((e=e||self)["k-intl"]=e["k-intl"]||{},e["k-intl"].sv=n())}(this,function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,n){var t=String(e).split("."),o=!t[1],l=Number(t[0])==e,i=l&&t[0].slice(-1),r=l&&t[0].slice(-2);return n?1!=i&&2!=i||11==r||12==r?"other":"one":1==e&&o?"one":"other"}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]});
