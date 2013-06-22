mysqlmid
========

node.js mysql middle

#Usage
一切都是为了方便地使用node.js操作mysql，根据日常经常使用的操作和各种坑，针对node.js的mysql模块进行二次封装，分享出来，希望你们喜欢。

#Quick Start

    git clone https://github.com/youyudehexie/mysqlmid.git
    npm install

#Example

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
			user_id: 2
		}

		var User = Schema('User', 'user');

		User.find(where, function(err, result){
			console.log(err, result);
		})
