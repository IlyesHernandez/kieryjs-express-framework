// import all module
const _e = require('express');
const chalk = require('chalk');
const path = require('path')
const app = _e();

// import all functions
const { createServer } = require('./function/createServer');
const { createPage } = require('./function/createPage')

const package = require('./package.json');

currentVersion_ = package.version
currentAuthor_ = package.author.name + ' ' + package.author.email

console.log(chalk.blueBright("PACKAGE VERSION : " + currentVersion_))
console.log(chalk.blueBright("PACKAGE AUTHOR : " + currentAuthor_))
console.log(chalk.white('---'))

// exports all function
module.exports.createServer = createServer;
module.exports.createPage = createPage;