const _e = require('express');
const chalk = require('chalk');
const path = require('path')
const { app } = require('./createServer')
 
function createPage(config){
    pathPage = config.pathPage;
    pathLink = config.pathLink;
    varPage = config.varPage;

    app.get('/' + pathLink, (req, res) => {
        res.render(`../views/${pathPage}`, varPage)
    })
}

module.exports.createPage = createPage;