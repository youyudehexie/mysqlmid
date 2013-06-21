var Schema = require('./schema');
var User = Schema('User', 'weibo_tag');

module.exports = User;
/*
var Mysqlmid = require('../lib');
var util = require('util');

var User = function(opts) {
	Mysqlmid.call(this, {table: 'weibo_tag'});
};

util.inherits(User, Mysqlmid);

module.exports = new User;*/
