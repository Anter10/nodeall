/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require("mysql");

var dbm   = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password:'123456'
});

//开始连接
dbm.connect();
dbm.query(qusery, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});




var pg = require('pg');
var conString = "postgres://username:password@localhost/database";

var client = null;

pg.connect(conString, function(err, client, done) {
  
  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client = client;
});

client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    done();
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
  });
  
  
var db = require('mongoskin').db('localhost:27017/animals');

db.collection('mamals').find().toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
});