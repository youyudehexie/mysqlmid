var mysqlmid = require('../lib');
var Schema = mysqlmid.Schema;

var opt = {
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'weibo'
}

mysqlmid.init(opt);

var User = Schema('User', 'weibo_tag');

var where = {
	tag_status: 0
}

User.findOne(where, function(err, result){
	console.log(err, result);
})
