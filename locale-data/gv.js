!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self)["k-intl"]=e["k-intl"]||{},e["k-intl"].gv=t())}(this,function(){"use strict";return[{locale:"gv",pluralRuleFunction:function(e,t){var n=String(e).split("."),i=n[0],o=!n[1],l=i.slice(-1),f=i.slice(-2);return t?"other":o&&1==l?"one":o&&2==l?"two":!o||0!=f&&20!=f&&40!=f&&60!=f&&80!=f?o?"other":"many":"few"}}]});
