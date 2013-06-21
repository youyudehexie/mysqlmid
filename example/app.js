//var User = require('./user');
require('coffee-script');
var mohair = require('mohair');
var mysql = require('../driver/mysql');
var Schema = require('./schema');


var opt = {
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'weibo'
}

mysql.init(opt);


var where = {
	tag_status: 0
}


var User = Schema('User', 'weibo_tag');
//var User1 = Schema('User', 'weibo_tag');
//console.log(User);
User.test(where, {join: 'JOIN A ON A.B = B.A'});
/*
var Schema = function(table, name){
	var name = function()
}

//['join']('JOIN A ON A.B = B.A');
User.test(where, {join: 'JOIN A ON A.B = B.A'}); */