require('coffee-script');
var mohair = require('mohair');
var mysql = require('../driver/mysql');
var Q = require('q');

var Mysqlmid = function(opts){
  var _opts = opts || {};
  var table = _opts.table || '';

  this.table = mohair.table(table);

};

Mysqlmid.prototype.findOne = function(_where){
  var query = this.table.where(_where)
							.limit(1)
							.select();

  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise;

};

Mysqlmid.prototype.insert = function(_insert){
  var query = this.table.insert(_insert);

  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res.insertId); 
  })

  return deferred.promise;
};

Mysqlmid.prototype.update = function(_where, _update){
  var query = this.table.where(_where)
                  .update(_update);

  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise;

};


Mysqlmid.prototype.find = function(_where){
  var query = this.table.where(_where)
              .select();

  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise;

};

Mysqlmid.prototype.delete = function(_where){
  var query = this.table.where(_where).delete();

  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise;
};

Mysqlmid.prototype.query = function(query){
  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise;

};


Mysqlmid.prototype.test = function(_where, arg){
  var query = this.table.where(_where)
  var keys = Object.keys(arg);

  for(var i = 0; i < keys.length; i++){
    query = query[keys[i]](arg[keys[i]])
  }

  var sql = query.sql();
  var args = query.params(); 

  console.log(sql, args);

 // mysql.query(sql, args, callback);
};

module.exports = Mysqlmid
