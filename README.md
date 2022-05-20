![LOGO](https://i.postimg.cc/Y92GJnQ5/Group-1-1.png)

Minimalist, fast, simple web framework based on [ExpressJS](https://github.com/expressjs/express) for [node](https://nodejs.org/).

- [![npm version](https://img.shields.io/npm/v/kieryjs.svg)](https://www.npmjs.com/package/kieryjs)
- [![npm download](https://img.shields.io/npm/dt/kieryjs.svg)](https://www.npmjs.com/package/kieryjs)
- [![install size](https://packagephobia.com/badge?p=kieryjs)](https://packagephobia.com/result?p=kieryjs)

```javascript
const kieryjs = require('kieryjs');

kieryjs.createServer({
    index: 'index.ejs',
    varPage: {},
    port: 3000,
    staticFolder: 'public'
});

kieryjs.createPage({
    pathLink: 'second',
    pathPage: 'second.ejs',
    varPage: {}
});
```

## Installation
KieryJS is available on [nodejs](https://nodejs.org/), before installing, [download and install Node.js](https://nodejs.org/en/download/).
For add KieryJS on your project, doing this command:
```$ npm install kieryjs```




