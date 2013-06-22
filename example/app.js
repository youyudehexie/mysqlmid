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

User.find(where, function(err, result){
	console.log(err, result);
})