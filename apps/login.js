/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');

var login = express.Router();


login.get('/login', function(req, res, next){
    res.send("登录界面吗");
});

login.get('/register',function(req, res, next){
    res.send("注册界面吗"); 
});

login.get("/findpwd",function(req, res, next){
    res.send("找回密码"); 
});


module.exports = login;