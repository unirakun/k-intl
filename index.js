!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("fbjs/lib/shallowEqual"),require("intl-messageformat")):"function"==typeof define&&define.amd?define(["exports","react","fbjs/lib/shallowEqual","intl-messageformat"],e):e((t=t||self)["k-intl"]={},t.React,t.shallowEqual,t.IntlMessageFormat)}(this,function(t,u,l,s){"use strict";var i="default"in u?u.default:u;function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e,n){return(v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&d(o,n.prototype),o}).apply(null,arguments)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}l=l&&l.hasOwnProperty("default")?l.default:l,s=s&&s.hasOwnProperty("default")?s.default:s;var r=function(t){return t.config},m=function(n){return function(t){var e=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r;return function(r){return function(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=o(r.store.getState());if((!n||!n[t])&&e)throw new Error("/HOC k-intl/ ".concat(t," is not readable. Make sure that this one is available at config.").concat(t," on your redux store"));return n[t]}}}(n)(t);return{locale:e("locale"),lang:e("lang"),formats:e("formats",!1)}}},j=function(t,e){return"string"!=typeof e?t:e.split(".").reduce(function(t,e){return t&&t[e]},t)},e=window.navigator.language||window.navigator.browserLanguage,w=function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e,a=1<arguments.length?arguments[1]:void 0,f=2<arguments.length?arguments[2]:void 0;return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!a)return{};var e,r,o,u,i=t;return"string"==typeof i&&(r=t,u=j(a,e=i),i=u&&"string"!=typeof u?Object.keys(u).reduce(function(t,e){return h({},t,p({},e,"".concat(r,".").concat(e)))},{}):p({},(o=e.split("."))[o.length-1],e)),Object.keys(i).reduce(function(t,e){return h({},t,p({},e,function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(t){if(t)try{return v(s,[e].concat(n)).format(t)}catch(t){return e}return e}}(j(a,i[e])||"",c,f)(n[e])))},{})}};t.hoc=function(a,f){return function(r){var t,e,n;return e=t=function(t){function o(t,e){var c,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,r=b(o).call(this,t,e),p(g(g(c=!r||"object"!=typeof r&&"function"!=typeof r?g(n):r)),"inject",function(t){var e=m(f)(c.context),n=e.lang,r=e.locale,o=e.formats,u=a;"function"==typeof a&&(u=a(t||c.props));var i=w(n,r,o)(u,t||c.props);l(c.state.injectedProps.messages,i)||c.setState(function(t){return h({},t,{injectedProps:{messages:i}})})}),c.messages={},c.state={injectedProps:{}},c}var e,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(o,u.Component),c((e=o).prototype,[{key:"componentWillMount",value:function(){var t=this;this.unsubscribe=this.context.store.subscribe(function(){t.inject()}),this.inject()}},{key:"componentWillReceiveProps",value:function(t){this.inject(t)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return i.createElement(r,y({},this.props,this.state.injectedProps))}}]),n&&c(e,n),o}(),p(t,"displayName",(n=r,"".concat("Intl"," (").concat(n.displayName||n.name||n.constructor&&n.constructor.name||"Unknown",")"))),p(t,"contextTypes",{store:function(){return null}}),e}},t.formatter=w,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
