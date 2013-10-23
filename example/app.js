var mysqlmid = require('../lib');
var Schema = mysqlmid.Schema;

var opt = {
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'wechat'
}

mysqlmid.init(opt);

var User = require('./user');


var where = {
	type: 0
}

var fun1 = function(rule){
    return rule
}

var fun2 = function(rule){
    console.log(rule);
}

User.findOne(where)
 .then(fun1)
 .then(fun2, console.error);
/*
var findRule = function(where, cb){
    var deferred = Q.defer();
    User.findOne(where, function(err, result){
        if(err) deferred.reject(err); 
        else deferred.resolve(result);
    })
    return deferred.promise.nodeify(cb);
}
*/
/*
findRule(where).then(console.log, console.error);
*/

