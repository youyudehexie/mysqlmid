var mysqlmid = require('../lib');
var Schema = mysqlmid.Schema;

var opt = {
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'pingtushuo'
}

mysqlmid.init(opt);


var User = require('./user');
var Column = Schema('cms_column');


User.on('findOne', function(data){
    console.log(data);
});


return User.findOne({id: 1})

