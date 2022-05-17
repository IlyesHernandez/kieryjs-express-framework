const { createServer } = require('./index.js')

createServer({
    port: 3000,
    index: 'index.ejs',
    varPage: { title: 'helloworld' },
    staticFolder: 'public'
});