require('coffee-script');
var mohair = require('mohair');
var mysql = require('../driver/mysql');
var Q = require('q');
var util = require('util');
var Event = require("events").EventEmitter;

var Mysqlmid = function(opts){

  Event.call(this);
  var _opts = opts || {};
  var table = _opts.table || '';

  this.table = mohair.table(table);

};

util.inherits(Mysqlmid, Event);


Mysqlmid.prototype.findOne = function(_where, callback){
  var query = this.table.where(_where)
							.limit(1)
							.select();

  this.query(query, callback, 'findOne')

};

Mysqlmid.prototype.insert = function(_insert, callback){
  var query = this.table.insert(_insert);

  this.query(query, callback, 'insert');
};

Mysqlmid.prototype.update = function(_where, _update, callback){
  var query = this.table.where(_where)
                  .update(_update);


  this.query(query, callback, 'update');

};


Mysqlmid.prototype.find = function(_where, callback){
  var query = this.table.where(_where)
              .select();


  this.query(query, callback, 'find');

};

Mysqlmid.prototype.delete = function(_where){
  var query = this.table.where(_where).delete();


  this.query(query, callback, 'delete');
};

Mysqlmid.prototype.query = function(query, callback, event){
  var self = this;
  var sql = query.sql();
  var args = query.params();

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
      if(err) {
         self.emit('error', err);
         deferred.reject(err); 
      } else {
         if(event) { 
            self.emit(event, res);
         }
         deferred.resolve(res); 
      }
  });

  return deferred.promise.nodeify(callback); 

};


Mysqlmid.prototype.raw = function(sql, args, callback){

  var deferred = Q.defer();
  mysql.query(sql, args, function(err, res){
    if(err) deferred.reject(err);
    else deferred.resolve(res); 
  })

  return deferred.promise.nodeify(callback); 
};


module.exports = Mysqlmid
