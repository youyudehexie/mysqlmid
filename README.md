mysqlmid
========

node.js mysql middle

#Usage
一切都是为了方便地使用node.js操作mysql，根据日常经常使用的操作和各种坑，针对node.js的mysql模块进行二次封装，分享出来，希望你们喜欢。

#Quick Start

    git clone https://github.com/youyudehexie/mysqlmid.git
    npm install

#Public API

## p.init(opt)

###连接参数 opt

+ host: 数据库地址
+ user: 数据库用户名
+ password: 数据库密码
+ database: 使用的数据库
+ 更多参数：https://github.com/felixge/node-mysql

## p.Schema(name, table)

+ 数据表实例化对象的名字
+ 数据表名称


## Schema

		var User = Schema('User', 'weibo_tag');

### findOne(where, cb)  

根据查找条件，找出一个匹配的一个值，实际执行的时候利用limit(1)来实现

		var where = {
			tag_status: 0
		}

		User.findOne(where, function(err, result){
			console.log(err, result); //查找结果为空时，返回null,查找成功时，直接返回result[0]的结果，不需要再次处理
		});

### find(where, cb)		

查找所有匹配条件的值

		var where = {
			tag_status: 0
		}

		User.findOne(where, function(err, result){
			console.log(err, result); //查找结果为空时，返回null
		});

### update(where, update, cb)

		var where = {
			id: 123124
		}

		var update = {
			tag_status: 1
		}

		User.update(where, update, function(err){
			console.log(err);
		});

### insert(insert, cb)

		var insert = {
			name: 'youyudehexie'
		}

		User.insert(insert, function(err, insertid){
			console.log(err, insertid);  //成功插入后，返回对应的插入ID。
		});

### delete(where, cb)

		var where = {
			name: 'youyudehexie'
		}

		User.insert(where, function(err){
			console.log(err); 
		});

### 还有更强大的功能，整理

#Example

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
