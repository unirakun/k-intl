!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self)["k-intl"]=e["k-intl"]||{},e["k-intl"].gd=t())}(this,function(){"use strict";return[{locale:"gd",pluralRuleFunction:function(e,t){var n=String(e).split("."),o=Number(n[0])==e;return t?"other":1==e||11==e?"one":2==e||12==e?"two":o&&3<=e&&e<=10||o&&13<=e&&e<=19?"few":"other"}}]});
