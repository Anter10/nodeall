/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();

// 登录界面
var login = require('./apps/login');
app.use("/nt/",login);

module.exports = app;