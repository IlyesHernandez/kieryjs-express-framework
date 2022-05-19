const _e = require('express');
const chalk = require('chalk');
const path = require('path')
const app = _e();

function createServer(config){
    port = config.port
    index = config.index
    variablePage = config.varPage
    staticFolder = config.staticFolder
    app.set('view engine', 'ejs');
    app.use(_e.static(staticFolder))
    app.use('/static', _e.static(path.join('../', staticFolder)))
    app.get('/', (req, res) => {
        res.render(`../views/${index}`, variablePage)
    });
    app.listen(port, () => {
        console.log(chalk.yellow('[!] Server Build...'))
        setTimeout(function(){
            console.log(chalk.greenBright('[!] Server open on ', chalk.bgWhiteBright('http://localhost:', port)))
        }, 2000);
    });
}

module.exports.createServer = createServer;
module.exports.app = app;