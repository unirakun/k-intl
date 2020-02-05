# k-intl

React HOC to provide internationalization.
This HOC uses `intl-messageformat` to format your text. (see full [documentation](https://github.com/yahoo/intl-messageformat))

[![CircleCI](https://circleci.com/gh/unirakun/k-intl.svg?style=shield)](https://circleci.com/gh/unirakun/k-intl) [![Coverage Status](https://coveralls.io/repos/github/unirakun/k-intl/badge.svg?branch=master)](https://coveralls.io/github/unirakun/k-intl?branch=master) [![NPM Version](https://badge.fury.io/js/k-intl.svg)](https://www.npmjs.com/package/k-intl)
[![Size](http://img.badgesize.io/unirakun/k-intl/master/index.js.svg)]() [![Greenkeeper badge](https://badges.greenkeeper.io/unirakun/k-intl.svg)](https://greenkeeper.io/)

## Installation
 - `yarn add k-intl`
 - `npm install --save k-intl`

## How to use me?

### Load locale on your store with this path: `store.config.locale`
```json
/* en.json */
{
  "meeseeks": {
    "sayHello": "I'm Mr. Meeseeks!"
  }
}
```

### Wrap your component with container
```js
/* meeseeks.container.js */

import intl from 'k-intl'
import Component from './meeseeks.jsx'

export default intl('meeseeks')(Component)
```

### And use the provided props `messages` on your component
```js
/* meeseeks.jsx */

export default ({ messages }) => <div>{messages.sayHello}</div>
```

# About uni rakun
**uni rakun** is created by two passionate french developers.

Do you want to contact them? Go to their [website](https://unirakun.fr)

<table border="0">
 <tr>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/26094222?s=460&v=4" width="100" /></td>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/17828231?s=460&v=4" width="100" /></td>
 </tr>
 <tr>
  <td align="center"><a href="https://github.com/guillaumecrespel">Guillaume CRESPEL</a></td>
  <td align="center"><a href="https://github.com/fabienjuif">Fabien JUIF</a></td>
</table>
